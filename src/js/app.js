class ClickCounter {

    constructor() {
        this.clickCount = 0;
        this.companionNumber = 0;
        this.companionCost = 100;
        this.compounderNumber = 0;
        this.compounderCost = 10;
    }

    clickCount = 0;

    clickAction = function() {
        this.clickCount++;

    }
    getClickCount = function() {
        return this.clickCount;
    }

    companionNumber = 0;
    companionCost;

    addCompanion = function() {
        this.companionNumber++;
    }

    getCompanionNumber = function() {
        return this.companionNumber;
    }

    buyCompanion = function() {
        if (this.clickCount >= this.companionCost) {
            this.addCompanion();
            this.clickCount = this.clickCount - this.companionCost;
            this.companionCostIncrease()
        }
    }

    companionCostIncrease = function() {
        this.companionCost = this.companionCost + (this.companionCost * 0.1)
    }

    companionClickCount = function() {
        this.clickCount = this.companionNumber + this.clickCount;
    }

    compounderCost;
    compounderNumber = 0;

    addCompounder = () => {
        this.compounderNumber++;
    }

    getCompounderNumber = function() {
        return this.compounderNumber;
    }

    buyCompounder = () => {
        this.addCompounder();
        this.clickCount = this.clickCount - this.compounderCost;
    }

}

let mainCookieObject = new ClickCounter
setInterval(mainCookieObject.companionClickCount(), 1000);