// Copyright (c) 2012 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.


function click(e) {
  chrome.tabs.executeScript(null,
      {code:"var option ='" + e.target.id + "'"},function() {chrome.tabs.executeScript(null,
		{ file: "jquery.js" },function() {chrome.tabs.executeScript(null,
	  { file: "SetKace.js" })})});
  window.close();
}

document.addEventListener('DOMContentLoaded', function () {
  var divs = document.querySelectorAll('div');
  for (var i = 0; i < divs.length; i++) {
    divs[i].addEventListener('click', click);
  }
});
