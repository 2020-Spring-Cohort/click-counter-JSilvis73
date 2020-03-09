class ClickCounter {

    constructor() {
        this.clickCount = 0;
        this.companionNumber = 0;
        this.companionCost = 100;
        this.compounderNumber = 0;
        this.compounderCost = 10;
        this.clickValue = 1;
    }

    clickCount = 0;
    clickValue;



    clickAction = function() {
        this.clickCount += this.clickValue;

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
        if (this.clickCount >= this.compounderCost) {
            this.addCompounder();
            this.clickCount = this.clickCount - this.compounderCost;
            this.compounderCostIncrease();
            this.compounderMultiplyer();
        }
    }

    compounderCostIncrease = () => {
        this.compounderCost = this.compounderCost + (this.compounderCost * 0.1)
    }

    compounderMultiplyer = () => {
        this.clickValue = this.clickValue + (this.clickValue * .2)
    }




}

/* let mainCookieObject = new ClickCounter
setInterval(mainCookieObject.companionClickCount(), 1000); */



const updateClickCount = (clickCountElement, clickCounterObject) => {
    clickCountElement.innerText = clickCounterObject.getClickCount();
}

const makeClickActionButton = (clickActionElement, clickCountElement, clickCounterObject) => {
    clickActionElement.addEventListener('click', () => {
        clickCounterObject.clickAction();
        updateClickCount(clickCountElement, clickCounterObject)
    })
}

const updateCompanionNumber = (companionNumberElement, clickCounterObject) => {
    companionNumberElement.innerText = clickCounterObject.getCompanionNumber();
}

const makeBuyCompanionButton = (buyCompanionElement, companionNumberElement, clickCounterObject) => {
    buyCompanionElement.addEventListener('click', () => {
        clickCounterObject.buyCompanion();
        updateCompanionNumber(companionNumberElement, clickCounterObject)
    })
}


const updateCompounderNumber = (compounderNumberElement, clickCounterObject) => {
    compounderNumberElement.innerText = clickCounterObject.getCompounderNumber();
}

const makeBuyCompounderButton = (buyCompounderElement, compounderNumberElement, clickCounterObject) => {
    buyCompounderElement.addEventListener('click', () => {
        clickCounterObject.buyCompounder();;
        updateCompounderNumber(compounderNumberElement, clickCounterObject)
    })
}

//HTML setup
const clickActionElement = document.querySelector(".click_Action");
const clickCountElement = document.querySelector('.clickCount');
const buyCompanionElement = document.querySelector(".buyCompanion");
const companionNumberElement = document.querySelector(".companionCount");
const compounderNumberElement = document.querySelector(".compounderCount");
const buyCompounderElement = document.querySelector(".buyCompounder");


const appCookie = new ClickCounter();

makeClickActionButton(clickActionElement, clickCountElement, appCookie);
updateClickCount(clickCountElement, appCookie);
makeBuyCompanionButton(buyCompanionElement, companionNumberElement, appCookie);
updateCompanionNumber(companionNumberElement, appCookie);
makeBuyCompounderButton(buyCompounderElement, compounderNumberElement, appCookie)
updateCompounderNumber(compounderNumberElement, appCookie);