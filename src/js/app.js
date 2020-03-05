class ClickCounter{

    constructor(){
        this.clickCount = 0;
        this.companionNumber = 0;
        this.companionCost = 100;
    }

    clickCount = 0;

    clickAction = function() {
        this.clickCount++;
        
    }
    getClickCount = function(){
        return this.clickCount;
    }

    companionNumber = 0;
    companionCost;

    addCompanion = function(){
        this.companionNumber++;
    }

    getCompanionNumber = function(){
        return this.companionNumber;
    }

    buyCompanion = function(){
        if(this.clickCount >= this.companionCost){
        this.addCompanion();
        this.clickCount = this.clickCount - this.companionCost;
        this.companionCostIncrease()
        }
    }

    companionCostIncrease = function () {
        this.companionCost = this.companionCost + (this.companionCost * 0.1)    
    }



}