module.exports = {
  // 'Demo Test: React Calculator Loads' : function (browser) {
  //   browser
  //     .url('https://ahfarmer.github.io/calculator/')
  //     .waitForElementVisible('body', 1000)
  //     .waitForElementVisible('#root > div > div.component-display > div', 1000)
  //     .waitForElementVisible('#root > div > div.component-button-panel > div:nth-child(5) > div.component-button.orange > button', 1000);
  // },

  // 'Addition Test - Ints' : function(browser) {
  //   browser
  //     .waitForElementVisible('#root > div > div.component-button-panel > div:nth-child(3) > div:nth-child(2) > button', 1000)
  //     .click('#root > div > div.component-button-panel > div:nth-child(3) > div:nth-child(2) > button')
  //     .pause(1000)
  //     .assert.containsText('#root > div > div.component-display > div', 5)
  //     .click('#root > div > div.component-button-panel > div:nth-child(4) > div.component-button.orange > button')
  //     .click('#root > div > div.component-button-panel > div:nth-child(2) > div:nth-child(1) > button')
  //     .pause(1000)
  //     .assert.containsText('#root > div > div.component-display > div', 7)
  //     .click('#root > div > div.component-button-panel > div:nth-child(5) > div.component-button.orange > button')
  //     .pause(1000)
  //     .assert.containsText('#root > div > div.component-display > div', 12)
  // },

  'Page Object Test': function (browser) {
    var calculator = browser.page.CalculatorPage();

    calculator.navigate()
      .assert.title('React Calculator')
      .verifyValue(0)
      .click5()
      .verifyValue(5)
      // .assert.containsText('@currentValue', 5)
      .clickAdd()
      .click7()
      .verifyValue(7)
      .clickEquals()
      .verifyValue(12)
    browser.pause(3000);
    browser.end();
  }
};