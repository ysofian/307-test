
/* 
example: portofolio = [{'AAPL' : 0},
                          {'MSFT' : 0}
                          {'TSLA' : 0}];
*/

function empty(obj) {
    if (obj.length == 0) {
        return true;
    } else {
        return false;
    }
}

function stocksOwned(obj) {
    if (obj.length == 0) {
        return 0;
    } else {
        return obj.length;
    }
}

function purchaseStock(array, tick, num) {
    objIndex = array.findIndex((obj=> obj.Ticker == tick));
    if (objIndex > -1) {
        array[objIndex].Owned += num;
    } else {
        array.push({Ticker : tick, Owned : num})
    }
    return array;
}

function sellStock(array, tick, num) {
    objIndex = array.findIndex((obj=> obj.Ticker == tick));
    if (objIndex > -1) {
        currentShare = array[objIndex].owned;
        if (num > currentShare) {
            throw new Error('ShareSaleException');
        } else {
            array[objIndex].Owned -= num;
        }
        return array;
    } else {
        return false;
    }
    return false;
}

function getStock(array, tick) {
    objIndex = array.findIndex((obj=> obj.Ticker == tick));
    if (objIndex > -1) {
        return array[objIndex].Owned;
    } else {
        return 0;
    }
    return false;
}

function updateStock(array) {
    for (var i = 0; i < array.length; i++) {
        if (array[i].Owned < 1) {
            array.splice(i, 1);
        }
    }
    return array;
}

exports.empty = empty;
exports.stocksOwned = stocksOwned;
exports.purchaseStock = purchaseStock;
exports.sellStock = sellStock;
exports.getStock = getStock;
exports.updateStock = updateStock;