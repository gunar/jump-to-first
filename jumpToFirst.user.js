// ==UserScript==
// @name       Workflowy: Jump to First Match
// @author     http://github.com/gunar
// @version    1.0
// ==/UserScript==

(function() {
  'use strict';
    document.onkeydown = function(e) {
      const isSearching = (document.querySelector('#searchBox:focus'));
      const isCtrlEnter = (e.key === 'Enter' && e.ctrlKey === true);
      if (isSearching && isCtrlEnter) {
        e.preventDefault();
        const { href } = document.querySelector('.matches .bullet');
        document.location = href;
        document.querySelector('#searchBox').focus();
      }
    };
})();
