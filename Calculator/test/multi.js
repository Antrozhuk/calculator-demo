function multi(a,b){
    if((typeof a===typeof 1)&&(typeof b===typeof 1))return a*b;
    return null;
}
describe("произведение", function() {
    describe("проверка умножения", function() {
        function makeTest(a,b) {
            let expected = a*b;
            it(`${a} * ${b} = ${expected}`, function() {
                assert.equal(multi(a,b), expected);
            });
        }
  
        for (let a = 0; a <= 3; a++) {
            for (let b = 0; b <= 3; b++){
                makeTest(a,b);
            }
        }
    });
    describe("проверка типов не number (возвращает null) ", function() {
        it("a=2,b=undefined; expected null", function() {
            assert.equal(multi(2,undefined),null);
        });
        it("'a=.',b=2; expected null", function() {
            assert.equal(multi('.',2),null);
        });
        it("a=null,b=2; expected null", function() {
            assert.equal(multi(null,2),null);
        });
    });
});