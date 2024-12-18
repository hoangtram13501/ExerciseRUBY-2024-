import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
    connect() {
        console.log("ProfileController is connected!");
    }
    editProfile() {
        console.log("editProfile action triggered!");
        const showProfileDiv = this.element.querySelector(".show-profile");
        const editProfileDiv = this.element.querySelector(".edit-profile");

        showProfileDiv.style.display = "none";
        editProfileDiv.style.display = "block";
    }
}
