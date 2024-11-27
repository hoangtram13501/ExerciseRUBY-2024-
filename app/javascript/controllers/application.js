import { Application } from "@hotwired/stimulus"
// import RemoteModalController from "./remote_modal_controller"

const application = Application.start()
    // application.register("remote_modal", RemoteModalController)

// Configure Stimulus development experience
application.debug = false
window.Stimulus = application

export { application }
