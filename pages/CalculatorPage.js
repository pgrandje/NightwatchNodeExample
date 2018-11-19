var calculatorCommands = {
  click5: function() {
    return this.waitForElementVisible('@num5', 1000).click('@num5');
  },

  click7: function() {
    return this.waitForElementVisible('@num7', 1000).click('@num7');
  },

  clickAdd: function() {
    return this.waitForElementVisible('@additionButton', 1000).click('@additionButton');
  },

  clickEquals: function() {
    return this.waitForElementVisible('@equalsButton', 1000).click('@equalsButton');
  },

  verifyValue: function(expectedValue) {
    return this.assert.containsText('@currentValue', expectedValue, 'ExpectedValue ' + expectedValue + ' not found.')
  }
};



module.exports = {
  // Using URL 'https://ahfarmer.github.io/calculator/',
  
  commands: [calculatorCommands],
    url: function() { 
      return this.api.launchUrl; 
    },

  elements: {

  	currentValue: { 
      selector: '#root > div > div.component-display > div'
    },

  	num5: { 
      selector: '#root > div > div.component-button-panel > div:nth-child(3) > div:nth-child(2) > button'
    },

  	additionButton: { 
      selector: '#root > div > div.component-button-panel > div:nth-child(4) > div.component-button.orange > button'
    },
  	
  	num7: { 
      selector: '#root > div > div.component-button-panel > div:nth-child(2) > div:nth-child(1) > button'
    },
  	
  	equalsButton: { 
      selector: '#root > div > div.component-button-panel > div:nth-child(5) > div.component-button.orange > button'
  	}
  }
};