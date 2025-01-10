import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
    // static targets = ["userId", "friendId", "addFriendButton", "cancelRequestButton", "unfriendButton"]
    static targets = ["user_id", "friend_id"]

    connect() {
        console.log("Friendship controller connected");
    }

    addFriend(event) {
        event.preventDefault();
        const userId = this.user_idTarget.value;
        const friendId = this.friend_idTarget.value;
        this.postFriend(userId, friendId);
    }

    async postFriend(userId, friendId) {
        const token = this.getAuthToken();
        if (!token) return;

        try {
            const response = await fetch('/api/v1/friendships', {
                method: 'POST',
                body: JSON.stringify({ friendships: { user_id: userId, friend_id: friendId } }),
                headers: this.getHeaders(token)
            });

            if (response.ok) {
                const res = await response.json();
                this.updateButtonState("cancel-request", "add-friend");
            } else {
                const errorData = await response.json();
                console.error('Failed to create friendship:', errorData);
                alert('Failed to create friendship: ' + errorData.message);
            }
        } catch (error) {
            console.error('Error:', error);
            alert('An error occurred. Please try again.');
        }
    }

    async cancelRequest(event) {
        event.preventDefault();
        const userId = this.user_idTarget.value;
        const friendId = this.friend_idTarget.value;
        const token = this.getAuthToken();
        if (!token) return;

        try {
            const response = await fetch('/api/v1/friendships/cancel_request', {
                method: 'DELETE',
                body: JSON.stringify({ friendships: { user_id: userId, friend_id: friendId } }),
                headers: this.getHeaders(token)
            });

            if (response.ok) {
                const res = await response.json();
                this.updateButtonState("add-friend", "cancel-request");
            } else {
                const errorData = await response.json();
                console.error('Failed to cancel request:', errorData);
                alert('Failed to cancel request: ' + errorData.message);
            }
        } catch (error) {
            console.error('Error:', error);
            alert('An error occurred. Please try again.');
        }
    }

    async unFriend(event) {
        event.preventDefault();
        const userId = this.user_idTarget.value;
        const friendId = this.friend_idTarget.value;
        const token = this.getAuthToken();
        if (!token) return;

        try {
            const response = await fetch('/api/v1/friendships/unfriend', {
                method: 'DELETE',
                body: JSON.stringify({ friendships: { user_id: userId, friend_id: friendId } }),
                headers: this.getHeaders(token)
            });

            if (response.ok) {
                console.log("Unfriend action successful");
                const res = await response.json();
                this.updateButtonState("add-friend", "unfriend");
            } else {
                const errorData = await response.json();
                console.error('Failed to unfriend:', errorData);
                alert('Failed to unfriend: ' + errorData.message);
            }
        } catch (error) {
            console.error('Error:', error);
            alert('An error occurred. Please try again.');
        }
    }

    async acceptFriend(event) {
        const token = this.getAuthToken();
        if (!token) return;

        const id = event.currentTarget.closest('.friend-request').getAttribute('data-friendship-id-value')

        try {

            const response = await fetch(`/api/v1/friendships/${id}/approve`, {
                method: 'PUT',
                body: JSON.stringify({ id }),
                headers: this.getHeaders(token)
            });

            if (response.ok) {
                debugger;
                const res = await response.json();
                $(this.element).addClass("hide");
            } else {
                const errorData = await response.json();
                console.error('Failed to cancel request:', errorData);
                alert('Failed to cancel request: ' + errorData.message);
            }
        } catch (error) {
            console.error('Error:', error);
            alert('An error occurred. Please try again.');
        }

    }

    async declineFriend(event) {
        const token = this.getAuthToken();
        if (!token) return;

        const id = event.currentTarget.closest('.friend-request').getAttribute('data-friendship-id-value')
        try {
            const response = await fetch(`/api/v1/friendships/${id}/cancel_request`, {
                method: 'DELETE',
                body: JSON.stringify({ id }),
                headers: this.getHeaders(token)
            });

            if (response.ok) {
                const res = await response.json();
                $(this.element).addClass("hide");
            } else {
                const errorData = await response.json();
                console.error('Failed to decline request:', errorData);
                alert('Failed to decline request: ' + errorData.message);
            }
        } catch (error) {
            console.error('Error:', error);
            alert('An error occurred. Please try again.');
        }
    }

    async getAuthToken() {
        const token = localStorage.getItem('authToken');
        if (!token) {
            console.error('No auth token found. User may not be logged in.');
            alert('Please log in to perform this action.');
        }
        return token;
    }

    getHeaders(token) {
        return {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
            'X-CSRF-Token': document.querySelector('[name=csrf-token]').content
        };
    }

    updateButtonState(showClass, hideClass) {
        const showButton = this.element.querySelector(`.${showClass}`);
        const hideButton = this.element.querySelector(`.${hideClass}`);

        if (showButton) showButton.classList.remove('d-none');
        if (hideButton) hideButton.classList.add('d-none');
    }
}
