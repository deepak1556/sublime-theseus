/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. */
"use strict";

const { classes: Cc, interfaces: Ci, utils: Cu, results: Cr } = Components;

Cu.import("resource://gre/modules/Services.jsm");
Cu.import("resource://gre/modules/XPCOMUtils.jsm");

XPCOMUtils.defineLazyModuleGetter(this, "EventEmitter",
  "resource:///modules/devtools/shared/event-emitter.js");
XPCOMUtils.defineLazyModuleGetter(this, "promise",
  "resource://gre/modules/commonjs/sdk/core/promise.js", "Promise");

function startup(aToolbox) {
  var editor = ace.edit("js-editor");
  editor.setTheme("ace/theme/twilight");
  editor.session.setMode("ace/mode/javascript");
  editor.session.setUseSoftTabs(true);
  editor.session.setTabSize(2);
  editor.setShowPrintMargin(false);	
  editor.setValue("the new text here");
  editor.focus();
  return promise.resolve(null);
}

function shutdown() {
  return promise.resolve(null);
}
