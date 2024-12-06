import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
    static targets = ["context", "image", "wall_id"]

    connect() {
        this.fetchPostList(1);
    }

    async fetchPostList(event) {
        let page = 1;
        if (event && event !== 1) {
            page = event;
        }

        const wall_id = this.wall_idTarget.value;

        const token = localStorage.getItem('authToken');
        if (!token) {
            console.error('No auth token found. User may not be logged in.');
            return;
        }

        try {
            const response = await fetch(`/api/v1/posts?wall_id=${wall_id}&page=${page}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `${token}`,
                    'X-CSRF-Token': document.querySelector('[name=csrf-token]').content,
                }
            });


            if (response.ok) {
                const res = await response.json();
                res.data.forEach((post) => {
                    this.displayPost(post);
                });
            } else {
                console.error('Failed to fetch user list');
            }
        } catch (error) {
            console.error('Error fetching user list:', error);
        }
    }

    async submit(event) {
        event.preventDefault(); // Prevent the default form submission

        const content = this.contextTarget.value;
        const image = this.imageTarget.files[0];
        const wall_id = this.wall_idTarget.value;
        const formData = new FormData();
        formData.append("post[image]", image);
        formData.append("post[context]", content);
        formData.append("post[wall_id]", wall_id);

        const token = localStorage.getItem('authToken');
        if (!token) {
            console.error('No auth token found. User may not be logged in.');
            return;
        }

        try {
            const response = await fetch('/api/v1/posts', {
                method: 'POST',
                body: formData,
                headers: {
                    'Authorization': `${token}`,
                    'X-CSRF-Token': document.querySelector('[name=csrf-token]').content
                }
            });

            if (response.ok) {
                $("#postModal").hide();
                $(".modal-backdrop").hide();
                const res = await response.json();
                const post = res.data[0];
                console.log(post);
                this.displayPost(post)
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

    displayPost(post) {
        const postElement = document.querySelector('.post-list');
        const template = document.querySelector('#post-template');
        const postClone = template.content.cloneNode(true);
        postClone.querySelector('.mt-content').textContent = post.attributes.content;
        postClone.querySelector('.mt-image').src = post.attributes.image;
        postClone.querySelector('.mt-time-post').textContent = post.attributes.created_at;
        postClone.querySelector('.mt-user-name').textContent = post.attributes.user_name;
        postClone.querySelector('.mt-content').textContent = post.attributes.context;
        const postId = post.attributes.id;
        const postCard = postClone.querySelector('.post-card');
        postCard.setAttribute('data-post-id', postId);
        postElement.prepend(postClone);
        const comments = post.attributes.comments;
        // const postElementCard = document.querySelector(`[data-post-id='${postId}']`);
        // $(postElementCard).find('.mt-post-id').val(postId);
        // if (comments.length == 0 && comments.length < 5) {
        //     $(postElementCard).find('.view-more-btn').hide()
        // }
        // comments.forEach((comment) => {
        //     this.displayComment(comment)
        // });
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
