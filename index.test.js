const myFunctions = require("./index.js");

test ("main test", () => {
    var stock = [];
    expect(myFunctions.empty([])).toBeTruthy();
    expect(stock).toBeTruthy();
    expect(myFunctions.stocksOwned(stock)).toBe(0);
    stock = myFunctions.purchaseStock(stock, 'AAPL', 5);
    stock = myFunctions.purchaseStock(stock, 'MSFT', 5);
    stock = myFunctions.purchaseStock(stock, 'TSLA', 5);
    stock = myFunctions.purchaseStock(stock, 'GOOGL', 5);
    stock = myFunctions.purchaseStock(stock, 'NFLX', 5);
    expected = [{Ticker : 'AAPL', Owned : 5},
                {Ticker : 'MSFT', Owned : 5},
                {Ticker : 'TSLA', Owned : 5},
                {Ticker : 'GOOGL', Owned : 5},
                {Ticker : 'NFLX', Owned : 5}];
    expect(stock).toStrictEqual(expected)
    expect(myFunctions.stocksOwned(stock)).toBe(5);
    stock = myFunctions.purchaseStock(stock, 'NFLX', 5);3
    expected = [{Ticker : 'AAPL', Owned : 5},
                {Ticker : 'MSFT', Owned : 5},
                {Ticker : 'TSLA', Owned : 5},
                {Ticker : 'GOOGL', Owned : 5},
                {Ticker : 'NFLX', Owned : 10}];
    expect(stock).toStrictEqual(expected);
    stock = myFunctions.sellStock(stock, 'NFLX', 10);
    stock = myFunctions.updateStock(stock);
    expected = [{Ticker : 'AAPL', Owned : 5},
                {Ticker : 'MSFT', Owned : 5},
                {Ticker : 'TSLA', Owned : 5},
                {Ticker : 'GOOGL', Owned : 5}];
    expect(stock).toStrictEqual(expected);
    expect(myFunctions.getStock(stock, 'AAPL')).toBe(5);
})