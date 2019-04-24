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
      debug: false
    }
    settings = $.extend(settings, options)

    // Log
    log = message => {
      if (settings.debug) {
        if (typeof ((console === "undefined") && (console === null))) {
          return console.log(message)
        } else {
          return undefined
        }
      } else {
        return undefined
      }
    }

    // Action
    action = () => {
      object.each(function() {
        $(this).on("click", event => {
          event.preventDefault()
        })
      })
    }

    // If object found run actions
    if (object.length > 0) {
      return this.each(() => {
        action()
        log("Altai Off Activated")
      })
    }
  }
}))(jQuery, window, document)
