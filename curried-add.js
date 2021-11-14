//Had to reference the soluton on this one.
//Just could not figure out how to send the progression
//realised a little recursion was needed

function curriedAdd(total) {

    if (total === undefined) return 0;

    return function addNextNum(num) {
        //checks if not a number 
        // else we add the total with the previous nums in stack
        if (num === undefined) return total;
        total += num;
        return addNextNum;
    };
}

module.exports = { curriedAdd };
