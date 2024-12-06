import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
    connect() {
        console.log("modal");
        // var content = $('#micropost_content').val();
        //   var image = $('#micropost_image')[0].files[0];
        //   var formData = new FormData();
        //   formData.append('content', content);
        //   formData.append('image', image);

    }

    isOpen(event) {
        event.preventDefault()
        const modalId = event.target.dataset.modalId
        this.modalElement = document.getElementById(modalId)
        this.modal = new bootstrap.Modal(this.modalElement)
        this.modal.show()
    }

}
