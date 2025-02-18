// app/javascript/controllers/photos_controller.js
import { Controller } from "stimulus";

export default class extends Controller {
    static targets = ["allPhotosContainer"]

    toggleVisibility(event) {
        event.preventDefault();
        debugger;

        this.allPhotosContainerTarget.classList.remove('hide');
    }
}
