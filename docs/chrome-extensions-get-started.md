---
title: Chrome Extensions - Get started (발췌)
source: https://developer.chrome.com/docs/extensions/get-started?hl=en
---

# Get started

Welcome to Chrome Extension development. Discover everything you need to start building and distributing your first Chrome Extension.

- Build your first extension: https://developer.chrome.com/docs/extensions/get-started/tutorial/hello-world
- See all tutorials: https://developer.chrome.com/docs/extensions/get-started#tutorials

## What are extensions?

Chrome extensions enhance the browsing experience by customizing the user interface, observing browser events, and modifying the web. Visit the Chrome Web Store for more examples of what extensions can do.

## How are they built?

You can build extensions using the same web technologies that are used to create web applications: HTML, CSS, and JavaScript.

## What can they do?

In addition to Web APIs, extensions also have access to Chrome Extension APIs to accomplish different tasks. For a more detailed overview, take a look at the Develop guide.

- Web APIs: https://developer.mozilla.org/docs/Web/API
- Chrome Extension APIs: https://developer.chrome.com/docs/extensions/reference
- Develop guide: https://developer.chrome.com/docs/extensions/develop

## Extension terminology

### Manifest

The extension's manifest is the only required file that must have a specific file name: manifest.json. It also has to be located in the extension's root directory. The manifest records important metadata, defines resources, declares permissions, and identifies which files to run in the background and on the page.

### Service workers

A service worker runs in the background and handles browser events, like removing a bookmark, or closing a tab. They don't have access to the DOM, but you can combine it with an offscreen document for this use case.

### Content scripts

Content scripts run JavaScript in the context of a web page.

### Toolbar action

Execute code when the user clicks on the extension toolbar icon or show a popup using the Action API.

### Side Panel

Display custom UI in the browser's side panel.

### DeclarativeNetRequest

Intercept, block, or modify network requests.

## Publish to the Chrome Web Store

### Design a high-quality extension

When choosing which features to support, make sure your extension fulfills a single purpose that is narrowly defined and easy to understand.

- Single purpose guidelines: https://developer.chrome.com/docs/webstore/program-policies/quality-guidelines-faq
- Best practices: https://developer.chrome.com/docs/webstore/best_practices

### Become familiar with the policies

Extensions distributed on the Chrome Web Store must comply with the developer program policies. Explore these policies to ensure your extension can be hosted in the Chrome Web Store.

- Policies: https://developer.chrome.com/docs/webstore/program-policies

### Include all extension logic

When writing your code, keep in mind that all logic must be included in the extension package. This means no additional JavaScript code may be downloaded at runtime. Improve extension security provides alternatives to executing remotely hosted code.

- Improve extension security: https://developer.chrome.com/docs/extensions/migrating/improve-security

## Tutorials

- Your first extension: https://developer.chrome.com/docs/extensions/get-started/tutorial/hello-world
- Run scripts on every page: https://developer.chrome.com/docs/extensions/get-started/tutorial/scripts-on-every-tab
- Inject scripts into the active tab: https://developer.chrome.com/docs/extensions/get-started/tutorial/scripts-activetab
- Create a tab manager: https://developer.chrome.com/docs/extensions/get-started/tutorial/popup-tabs-manager
- Handle events with service workers: https://developer.chrome.com/docs/extensions/get-started/tutorial/service-worker-events
- Debug your extension: https://developer.chrome.com/docs/extensions/get-started/tutorial/debug
