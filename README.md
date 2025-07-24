# Friends to Connections ( for Roblox.com )

## What is this?

A simple JavaScript snippet that replaces all mentions of **"Connect"** and **"Connections"** on a Roblox.com with **"Friends"**

## How it works

* Uses a **MutationObserver** to watch for changes in the page DOM.
* Whenever the page updates (loads dynamically), it automatically replaces all text
* Also injects a custom `<h1>` title at the top saying **"My Friends"** if not already there

## How to Use
1. download content.js and manifest.json
2. put them both in the same folder
3. go on chrome://extensions/ and click "Developer mode" on top right
4. then click "Load unfolded" on top left and click on the folder
5. you're done

## Why?

Alot of people who use Roblox have been very angry about the change from "Friends" to "Connections" so i made this for them

## Features

* Replace "Connect" to "Friends"
* Replace "Connections" to "Friends"
* Changes in headers, buttons, tooltips, friend requests, profile labels, and more
* Auto-updates with dynamic content changes using MutationObserver
