(function() {
  selectedDate = "selected-date";
  autoscroll = false;

  prev = document.getElementById("prev-date");
  next = document.getElementById("next-date");

  scroll = document.getElementById("scroll");
  dates = document.getElementsByClassName("event-list");

  currentIndex = 0;

  overscroll = 50;

  /*
   * Return to previously selected day on browser back through hash
   */
  if(window.location.hash) {
    req = parseInt(window.location.hash.substring(1), 16)
    console.log("hash not null", req);
    if(req > 0 && req < dates.length) {
      currentIndex = req;

      // Also scroll to the requested index.
      autoscroll = true;
      scroll.scrollLeft = dates[req].offsetLeft - scroll.offsetLeft;
    }
  }
  highlightCurrentDate(currentIndex);

  /*
   * Handle prev/next button clicks
   */
  prev.onclick = function(e) {
    if(currentIndex > 0) {
      autoscroll = true;
      currentIndex--;
      scroll.scrollLeft = dates[currentIndex].offsetLeft - scroll.offsetLeft;
      highlightCurrentDate(currentIndex);
    }
  }

  next.onclick = function(e) {
    if(currentIndex < dates.length - 1) {
      autoscroll = true;
      currentIndex++;
      scroll.scrollLeft = dates[currentIndex].offsetLeft - scroll.offsetLeft;
      highlightCurrentDate(currentIndex);
    }
  }

  /*
   * Handle native scrolling
   */
  scroll.onscroll = function(e) {
    if(!autoscroll) {
      determineSelected();
    } else {
      autoscroll = false;
    }
  }

  function determineSelected() {
    var i = 0;
    while(i < dates.length) {
      if(dates[i].offsetLeft - scroll.offsetLeft >= scroll.scrollLeft - overscroll) {
        currentIndex = i;
        highlightCurrentDate(currentIndex);
        break;
      }

      i++;
    }
  }

  function highlightCurrentDate(c) {
    for(var i = 0; i < dates.length; i++) {
      if(i == c) {
        addClass(dates[i], selectedDate);
      } else if(hasClass(dates[i], selectedDate)) {
        removeClass(dates[i], selectedDate);
      }
    }

    window.location.hash = c.toString(16);
  }
})();
