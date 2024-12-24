import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
    connect() {
        console.log("ProfileController is connected!");
    }
    async editProfile() {
        const showProfileDiv = this.element.querySelector(".show-profile");
        const editProfileDiv = this.element.querySelector("#profileEdit");

        editProfileDiv.style.display = "block";
        showProfileDiv.style.display = "none";

    }
}
