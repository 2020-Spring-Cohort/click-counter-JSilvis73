class ClickCounter{

    constructor(){
        this.clickCount = 0;
    }

    clickCount = 0;

    clickAction = function() {
        this.clickCount++;
        
    }
    getClickCount = function(){
        return this.clickCount;
    }
}