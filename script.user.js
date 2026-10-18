// ==UserScript==
// @name         Simplified Github Homepage
// @namespace    http://tampermonkey.net/
// @version      0.0.3
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
        /* Hide feed details, sidebar first section, sidebar divider */
        div.application-main div.feed-background>div, div.top-0>div:first-child, div.top-0>hr {
            display: none;
        }
        /* Center and change size of sidebar */
        aside.feed-left-sidebar {
            margin: 20px auto;
            border-radius: 5px;
            width: 768px;
            height: fit-content;
        }
        /* Unset sidebar innter container min height */
        aside.feed-left-sidebar div.dashboard-sidebar {
            min-height: unset;
        }
        /* Repo list */
        aside.feed-left-sidebar li[data-component='ActionList.Group'] ul {
            max-height: 512px;
            overflow-y: scroll;
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            align-items: center;
            gap: 20px 5px;
        }
        /* Repo item outer container */
        aside.feed-left-sidebar li[data-component='ActionList.Item'] {
            flex: 0 0 22%;
            height: 75px;
            border-radius: 5px;
        }
        /* Repo item inner container */
        aside.feed-left-sidebar li[data-component='ActionList.Item']>a {
            height: 100%;
            display: flex;
            flex-direction: row-reverse;
            align-items: center;
            margin: 0!important;
            gap: 5px;
        }
        /* Repo search bar */
        aside.feed-left-sidebar li[class*='searchInputWrapper'] {
            width: 100%;
        }
    `);
    setTimeout(() => {
        // Click the "show more" button
        document.querySelector("aside.feed-left-sidebar button[data-testid='dynamic-side-panel-items-show-more']")?.click();
    }, 2048);
})();
