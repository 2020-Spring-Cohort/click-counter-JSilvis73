describe("Click Count Calamity", function(){
        let sut;

        beforeEach(function(){
            sut = new ClickCounter();
            sut.ClickCount = 0;
        })


    describe('ClickAction', function(){

        it('should increase ClickCounter by 1', function(){
            //action
            sut.clickAction()
            expect(sut.clickCount).toBe(1);
        })
    })

    describe('getClickCount', function(){

        it('should return a ClickCount of 1 after clickAction is performed', function(){
            //action
            sut.clickAction();
            expect(sut.getClickCount()).toBe(1);
        })
        
    })
})
