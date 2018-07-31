$(document).ready(function(){
  // Smooth Scrolling; source: https://www.w3schools.com/jquery/tryit.asp?filename=tryjquery_eff_animate_smoothscroll
  // Add smooth scrolling to all links
  void function() {
  'use strict';

  var ANCHOR_SELECTOR = 'a[href*="#"]:not([href="#"]):not([href="#0"])';
  var CHECK_INTERVAL = 50;

  var currentTimeout;
  var currentScrollY;
  var anchors = document.querySelectorAll(ANCHOR_SELECTOR);
  var anchor;

  for (let i = 0; i < anchors.length; i++) {
    anchor = anchors[i];

    ensurePathnameLacksTerminalSlash(anchor);

    if (!pathnameIsLocal(anchor)) continue;

    anchor.addEventListener('click', scrollToAnchor);
  }

  function checkFocus() {
    if (currentScrollY === window.pageYOffset) {
      this.focus();

      try {
        if (this.matches(':focus')) return;
      } catch (err) {
        // IE11
      }

      this.tabIndex = -1;
      this.focus();

      return;
    }

    currentScrollY = window.pageYOffset;
    currentTimeout = setTimeout(checkFocus.bind(this), CHECK_INTERVAL);
  }

  function ensurePathnameLacksTerminalSlash(anchor) {
    if (anchor.pathname[anchor.pathname.length - 1] === '/') {
      anchor.pathname = anchor.pathname.slice(0, -1);
    }
  }

  function pathnameIsLocal(anchor) {
    return (
      anchor.hostname === location.hostname &&
      anchor.pathname === location.pathname
    );
  }

  function scrollToAnchor(event) {
    var id = this.hash.slice(1);

    var target =
      document.getElementById(id) ||
      document.getElementsByName(id)[0];

    if (!target) return;

    currentScrollY = window.pageYOffset;

    clearTimeout(currentTimeout);

    event.preventDefault();

    target.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });

    currentTimeout = setTimeout(checkFocus.bind(target), CHECK_INTERVAL);
  }
};
});
