/*
* Name: altai_off
* Title: Altai Off
* Description: Disable anchor href default behaviour.
*
*/

// jQuery
import $ from "jquery"
import jQuery from "jquery"

(($, window, document) => $.fn.extend({
  altaiOff(options) {

    // Lets & Constants
    let action
    let log
    let settings
    const object = $(this)

    // Settings
    settings = {
      debug: true
    }
    settings = $.extend(settings, options)

    // Log
    log = message => {
      if (settings.debug) {
        return console.log(message)
      } else {
        return undefined
      }
    }

    // Action
    action = () => {
      object.each( () => {
        $(this).on("click", event => {
          event.preventDefault()
          log("Altai Off Activated!")
        })
      })
    }

    // If object found run actions
    if (object.length > 0) {
      action()
    }
  }
}))(jQuery, window, document)
