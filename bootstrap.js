/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. */
"use strict";

const { classes: Cc, interfaces: Ci, utils: Cu, results: Cr } = Components;

Cu.import("resource://gre/modules/Services.jsm");
Cu.import("resource://gre/modules/XPCOMUtils.jsm");
Cu.import("resource:///modules/devtools/gDevTools.jsm");

XPCOMUtils.defineLazyGetter(this, "osString", () =>
  Cc["@mozilla.org/xre/app-info;1"].getService(Ci.nsIXULRuntime).OS);

XPCOMUtils.defineLazyGetter(this, "toolStrings", () =>
  Services.strings.createBundle("chrome://theseus/locale/theseus.properties"));

XPCOMUtils.defineLazyGetter(this, "toolDefinition", () => ({
  id: "theseus",
  ordinal: 99,
  key: toolStrings.GetStringFromName("Theseus.commandkey"),
  modifiers: osString == "Darwin" ? "accel,alt" : "accel,shift",
  icon: "chrome://theseus/skin/icon.png",
  url: "chrome://theseus/content/theseus.xul",
  label: toolStrings.GetStringFromName("Theseus.label"),
  tooltip: toolStrings.GetStringFromName("Theseus.tooltip"),
  isTargetSupported: function(target) {
    return target.isLocalTab;
  },
  build: function(iframeWindow, toolbox) {
    Cu.import("chrome://theseus/content/panel.js");
    let panel = new MyAddonPanel(iframeWindow, toolbox);
    return panel.open();
  }
}));

function startup() {
  gDevTools.registerTool(toolDefinition);
}

function shutdown() {
  gDevTools.unregisterTool(toolDefinition);
  Services.obs.notifyObservers(null, "startupcache-invalidate", null);
}

function install() {
}

function uninstall() {
}
