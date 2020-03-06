describe("Click Count Calamity", function() {

    describe("Clicker", function() {


        let sut;

        beforeEach(function() {
            sut = new ClickCounter();
            sut.clickCount = 0;

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

        })




    })
})