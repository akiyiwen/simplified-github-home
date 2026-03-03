// ==UserScript==
// @name         Simplified Github Homepage
// @namespace    http://tampermonkey.net/
// @version      0.0.1
// @description  Hide useless components and only display my repos on Github homepage
// @author       akiyiwen
// @match        https://github.com/
// @icon         https://www.google.com/s2/favicons?sz=64&domain=github.com
// @grant        GM_addStyle
// @license      MIT
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...
    GM_addStyle(`
        html, body, body>div:first-child, div.application-main, div.color-bg-default, div.feed-background {
            height: 100%;
            width: 100%;
        }
        body>div:first-child, div.color-bg-default {
            display: flex;
            flex-direction: column;
        }
        div.feed-background {
            min-height: 0!important;
        }
        div.application-main div.feed-background>div {
            display: none;
        }
        aside.feed-left-sidebar {
            margin: 20px auto;
            border-radius: 5px;
            width: 768px;
            height: 768px;
        }
        div.js-repos-container ul {
            max-height: 512px;
            overflow: auto;
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            align-items: flex-start;
            gap: 5px;
        }
        div.js-repos-container ul li {
            flex: 0 0 24%;
            height: 75px;
            border-radius: 5px;
        }
        div.js-repos-container ul li>div {
            height: 100%;
            display: flex;
            flex-direction: row;
            align-items: center;
            margin: 0!important;
            padding: 1em;
        }
        div.js-repos-container ul li.private {
            background-color: #644044;
        }
        div.js-repos-container ul li.public {
            background-color: #3d444d;
        }
    `);
    setTimeout(() => {
        document.querySelector("div.js-repos-container button")?.click();
    }, 2048);
})();
