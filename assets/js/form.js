(function() {
  document.getElementById("event-form").onsubmit = function(e) {
    failedValidation = false
    failedClass = "failed-validation";
    eventTitle = document.getElementById("title");
    eventLocation = document.getElementById("location");
    eventUrl = document.getElementById("url");
    eventMonth = document.getElementById("month");
    eventDay = document.getElementById("day");
    eventYear = document.getElementById("year");
    eventHour = document.getElementById("hour");
    eventMinute = document.getElementById("minute");
    eventAmPm = document.getElementById("ampm");
    eventFree = document.getElementById("input-free");
    eventPrice = document.getElementById("input-price");
    eventDetails = document.getElementById("input-details");

    // Events must have a title
    if(eventTitle.value.trim().length == 0) {
      addClass(eventTitle, failedClass);
      failedValidation = true;
    } else {
      removeClass(eventTitle, failedClass);
    }

    // Events must have a location
    if(eventLocation.value.trim().length == 0) {
      addClass(eventLocation, failedClass);
      failedValidation = true;
    } else {
      removeClass(eventLocation, failedClass);
    }

    // Events must be created in the future
    currentDate = new Date();
    selectedDate = new Date(eventYear.value + " " + eventMonth.value + " " + eventDay.value);
    if(selectedDate - currentDate <= 0) {
      addClass(eventYear, failedClass)
      addClass(eventMonth, failedClass)
      addClass(eventDay, failedClass)
      failedValidation = true;
    } else {
      removeClass(eventYear, failedClass);
      removeClass(eventMonth, failedClass);
      removeClass(eventDay, failedClass);
    }

    if(failedValidation) {
      e.preventDefault();
      return false;
    }
  }
})();
