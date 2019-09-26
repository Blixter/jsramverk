/**
 * Test for getting started with Selenium.
 */



var webdriver = require("selenium-webdriver");
var browser = new webdriver.Builder().withCapabilities(webdriver.Capabilities.firefox())
    .build();

browser.get("http://localhost:3000");

// Two different ways to work with promises
// Way 1
let promise = browser.getTitle();

promise.then(function(title) {
    console.log(title);
});

// Way 2
browser.getTitle().then(function( title ) {
    console.log(title);
});

browser.quit();