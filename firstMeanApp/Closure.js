/**
 * Created by martins on 5/13/16.
 */

//    closure:
var test = function () {
    var tal = 10;
    return {
        getTal: function () {
            return tal;
        },
        setTal: function (newTal) {
            tal = newTal;
        }
    }
}
var te = test();
console.log(te.getTal());
te.setTal(30);
console.log(te.getTal());
te = test();
