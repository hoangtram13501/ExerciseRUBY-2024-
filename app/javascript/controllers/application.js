import { Application } from "@hotwired/stimulus"
import { definitionsFromContext } from "stimulus/webpack-helpers";
import RemoteModalController from "./remote_modal_controller"

const application = Application.start()
const context = require.context("./controllers", true, /\.js$/);
application.load(definitionsFromContext(context));
application.register("remote_modal", RemoteModalController)

// Configure Stimulus development experience
application.debug = false
window.Stimulus = application

export { application }