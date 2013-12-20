var panelWindow, injectedPanel = false, injectedPage = false, panelVisible = false, savedStack = [];

chrome.devtools.panels.create("Theseus", "", "panes/index.html");