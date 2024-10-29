import { Controller } from "stimulus";

export default class extends Controller {
    connect() {
        console.log("aaaaa")
    }

    isOpen(event) {
        event.preventDefault();
        const modalId = event.target.dataset.modalId;
        this.modalElement = document.getElementById(modalId);
        this.modal = new bootstrap.Modal(this.modalElement);
        this.modal.show();
    }

    connect() {
        const postButton = this.modalElement.querySelector('#postButton');
        postButton.addEventListener('click', () => {
            this.savePost();
            this.modal.hide();
        });
    }

    savePost() {
        const title = this.modalElement.querySelector('#title').value;
        const content = this.modalElement.querySelector('#content').value;
        const image = this.modalElement.querySelector('#imageUpload').files[0];
    }
}