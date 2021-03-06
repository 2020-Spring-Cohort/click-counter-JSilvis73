describe("Click Count Calamity", function() {

    describe("Clicker", function() {


        let sut;
        let testClickCount;
        let testClickAction;
        let testBuyCompanion;
        let testCompanionNumber;
        let testCompounderNumber;



        beforeEach(function() {
            sut = new ClickCounter();
            sut.clickCount = 0;
            testClickAction = document.createElement('button');
            testClickCount = document.createElement('div');
            testBuyCompanion = document.createElement('button')
            testCompanionNumber = document.createElement('div')
            testBuyCompounder = document.createElement('button');
            textCompounderNumber = document.createElement('div');
            makeClickActionButton(testClickAction, testClickCount, sut);
            makeBuyCompanionButton(testBuyCompanion, testCompanionNumber, sut);


        })

        describe('ClickAction', function() {

            it('should increase ClickCounter by 1', function() {
                //action
                sut.clickAction()
                expect(sut.clickCount).toBe(1);
            })
        })

        describe('getClickCount', function() {

            it('should return a ClickCount of 1 after clickAction is performed', function() {
                //action
                sut.clickAction();
                expect(sut.getClickCount()).toBe(1);
            })

        })

        describe('Click Companion', function() {

            describe('companionNumber property should be populated', function() {
                it('should show companionNumber not to be null', function() {
                    expect(sut.companionNumber).not.toBe(null);
                })
            })

            describe('addClickCompanion should increase companionNumber', function() {
                it('should show 1 for companionNumber', function() {
                    sut.addCompanion();
                    expect(sut.companionNumber).toBe(1);
                })
            })

            describe('buyCompanion', function() {
                it('should reduce clickCount by 100', function() {
                    sut.clickCount = 100;
                    sut.buyCompanion();
                    expect(sut.clickCount).toBe(0);
                })
            })

            describe('companionCost', function() {
                it('should increase the cost of companion', function() {
                    sut.clickCount = 100;
                    sut.buyCompanion();
                    expect(sut.companionCost).toBe(110)
                })
            })

            describe('buyCompanion cost increase', function() {
                it('buyCompanion should increase in cost after buyCompanion was clicked', function() {
                    sut.clickCount = 90;
                    sut.buyCompanion()
                    expect(sut.companionNumber).toBe(0)

                })
            })


        })

        describe('Click Compounder', function() {

            describe('compounderNumber property should be populated', function() {
                it('should show compounderNumber not to be null', function() {
                    expect(sut.compounderNumber).not.toBe(null);
                })
            })

            describe('addCompounder should increase compounderNumber', function() {
                it('should show 1 for compounderNumber', function() {
                    sut.addCompounder();
                    expect(sut.compounderNumber).toBe(1);
                })
            })

            describe('buyCompounder should decrease clickCount', function() {
                it('should reduce ClickCount by 10', function() {
                    sut.clickCount = 10;
                    sut.buyCompounder();
                    expect(sut.clickCount).toBe(0);
                })
            })

            describe('compounderCost', function() {
                it('should increase the cost of compounder', function() {
                    sut.clickCount = 10;
                    sut.buyCompounder();
                    expect(sut.compounderCost).toBe(11)
                })
            })

            describe('buyCompounder if you have enough clicks', function() {
                it('should not allow you to buyCompounder if less than compounderCost', function() {
                    sut.clickCount = 110;
                    sut.buyCompounder()
                    sut.buyCompounder()
                    expect(sut.clickCount).toBe(89)
                })
            })

            describe('compounder should increase click value', function() {
                it('should increase clickValue by compounderNumber', function() {
                    sut.clickCount = 10;
                    sut.buyCompounder();
                    sut.clickAction();
                    expect(sut.getClickCount()).toBe(1.2)
                })
            })

        })

        describe('DOM manipulation', function() {

            describe('updateClickCount() - as the button is clicked, the innerText of the element reflects the ClickCount', () => {
                it('Without clicking the clickCount should be 0', () => {
                    updateClickCount(testClickCount, sut);
                    expect(testClickCount.innerText).toBe('0');
                })



            })

            describe('After clicking the clickCount should be 1', function() {
                it('after clickAction is performed clickCount should be 1', function() {
                    sut.clickAction();
                    updateClickCount(testClickCount, sut);
                    expect(testClickCount.innerText).toBe('1');

                })
            })

            describe('makeClickActionButton() - creates a clickAction button out of the passed button, calls clickAction() one time when clicked.', () => {
                it('clicking once on the clickAction button will increase clickCount by 1', () => {
                    testClickAction.click();
                    expect(sut.getClickCount()).toBe(1);
                })
            })

            describe('updateCompanionNumber() - as the button is clicked the innerText of the element reflects the companionNumber', () => {
                it('without clicking the companionNumbershould be 0', () => {
                    updateCompanionNumber(testCompanionNumber, sut);
                    expect(testCompanionNumber.innerText).toBe('0');
                })
            })


            describe('make buyCompanionButton() - creates a buy companion button out of the passed button, calls buyCompanion() one time when clicked.', () => {
                it('clicked once should increase companionNumber by 1', () => {
                    sut.clickCount = 110;
                    testBuyCompanion.click();
                    expect(sut.getCompanionNumber()).toBe(1)
                })
            })

/*             describe('updateCompounderNumber() - as the button is clicked the innerText of the element reflects the compounderNumber', () => {
                it('without clicking the compunderNumber should be 0', () => {
                    updateCompounderNumber(testCompounderNumber, sut);
                    expect(testCompounderNumber.innerText).toBe('0');
                })
            }) */





        })
    })
})