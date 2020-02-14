function fract(a,b){
    if((typeof a===typeof 1)&&(typeof b===typeof 1))return a/b;
    return null;
}
describe("деление", function() {
    describe("проверка деления", function() {
        function makeTest(a,b) {
            let expected = a/b;
            it(`${a} / ${b} = ${expected}`, function() {
                assert.equal(fract(a,b), expected);
            });
        }
  
        for (let a = 1; a <= 4; a++) {
            for (let b = 0; b <= 3; b++){
                makeTest(a,b);
            }
        }
    });
    describe("проверка типов не number(возвращает null) ", function() {
        it("a=2,b=undefined; expected null", function() {
            assert.equal(fract(2,undefined),null);
        });
        it("'a=.',b=2; expected null", function() {
            assert.equal(fract('.',2),null);
        });
        it("a=null,b=2; expected null", function() {
            assert.equal(fract(null,2),null);
        });
    });
});