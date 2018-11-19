var calculatorCommands = {
  click5: function() {
    this.num5.click();
    return this;
  }
};



module.exports = {
  // url: 'https://ahfarmer.github.io/calculator/',
  
  commands: [

    url: function() { 
      return this.api.launchUrl; 
    },

    click5: function() {
    	this.num5.click();
    	return this;
  	}
  ],

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