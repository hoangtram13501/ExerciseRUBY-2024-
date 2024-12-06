import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="logout"
export default class extends Controller {
    static targets = ["content", "post_id"]
    connect() {}

    handleEnter(event) {
        this.postComment();
    }

    viewMoreComments(event) {
        console.log('aaaaa');
    }

    async postComment() {
        const content = this.contentTarget.value;
        const post_id = this.post_idTarget.value;

        const token = localStorage.getItem('authToken');
        if (!token) {
            console.error('No auth token found. User may not be logged in.');
            return;
        }

        try {
            const response = await fetch('/api/v1/comments', {
                method: 'POST',
                body: JSON.stringify({ comments: { content, post_id } }),
                headers: {
                    'Authorization': `${token}`,
                    'Content-Type': 'application/json',
                    'X-CSRF-Token': document.querySelector('[name=csrf-token]').content
                }
            });

            if (response.ok) {
                const res = await response.json();
                const comment = res.data[0];
                this.displayComment(comment);
                $(this.element).find("input[type=text]").val("");
            } else {
                const errorData = await response.json();
                // Handle login failure (e.g., show error message)
                console.error('Login failed:', errorData);
                alert('Login failed: ' + errorData.error);
            }
        } catch (error) {
            console.error('Error:', error);
            alert('An error occurred. Please try again.');
        }
    }

    displayComment(comment) {
        const commentElement = document.querySelector('.content-comment-list');
        const template = document.querySelector('#comment-template');
        const commentClone = template.content.cloneNode(true);
        commentClone.querySelector('.cmt-user-name').textContent = comment.attributes.user_name;
        commentClone.querySelector('.cmt-created-at').textContent = comment.attributes.created_at;
        commentClone.querySelector('.cmt-content').textContent = comment.attributes.content;
        commentElement.prepend(commentClone);
    }

}