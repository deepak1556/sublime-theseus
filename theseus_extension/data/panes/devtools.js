'use strict';

function startup() {
  alert("hello");
  var editor = ace.edit("js-editor");
  editor.setTheme("ace/theme/twilight");
  editor.session.setMode("ace/mode/javascript");
  editor.session.setUseSoftTabs(true);
  editor.session.setTabSize(2);
  editor.setShowPrintMargin(false); 
  editor.setValue("the new text here");
  editor.focus();
}

/**
 * Connect!
 */
startup();
