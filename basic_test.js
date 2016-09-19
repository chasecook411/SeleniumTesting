// Getting started: http://docs.seleniumhq.org/docs/03_webdriver.jsp
// API details: https://github.com/SeleniumHQ/selenium#selenium

var webdriver = require('selenium-webdriver'),
    SeleniumServer = require('selenium-webdriver/remote').SeleniumServer;

var caps = {
    name : 'Selenium Test Example',
    build :  '1.0',

    browser_api_name : 'IE10',
    os_api_name : 'Win7x64-C2',

    screen_resolution : '1024x768',
    record_video : "true",
    record_network : "true",

    browserName : "internet explorer", // <---- this needs to be the browser type in lower case: firefox, internet explorer, chrome, opera, or safari
    username : "chase@crossbrowsertesting.com",
    password : "u81305495037f796"
};

var cs = "http://hub.crossbrowsertesting.com:80/wd/hub";

var driver = new webdriver.Builder()
    .usingServer(cs)
    .withCapabilities(caps)
    .build();

driver.get("http://google.com");
driver.findElement(webdriver.By.name('q')).sendKeys('cross browser testing');
driver.findElement(webdriver.By.name('btnG')).click();


driver.quit();
