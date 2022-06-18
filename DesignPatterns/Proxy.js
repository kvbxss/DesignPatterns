// Serwuis z zewnętrznym API
function StockAPI()
{
    this.getValue = function(stock)
    {
        console.log("Łączenie z zewnętrznym API... ")
        switch(stock)
        {
            case "Apple":
                return "$149.64"
            case "Tesla":
                return "$759.63"
            case "Netflix":
                return "$195.19"
            case "Walt Disney":
                return "$109.32"
            case "Coca-Cola":
                return "$64.68"
            case "Amazon":
                return "$2302.93"
            case "Boeing Company":
                return "$132.23"
        }
    }
}
/////////////////
//Łączenie z API występowało za każdym razem
// const stockapi = new StockAPI()

// console.log(stockapi.getValue("Tesla"))
// console.log(stockapi.getValue("Coca-Cola"))
// console.log(stockapi.getValue("Apple"))


function StockProxy()
    {
        this.stockapi = new StockAPI()
        this.cache = {}

        this.getValue = function(stock)
        {
            if(this.cache[stock] == null)
            {
                this.cache[stock] = this.stockapi.getValue(stock)
            }
            return this.cache[stock]
        }
    }

const proxy = new StockProxy()

console.log(proxy.getValue("Boeing Company"))
console.log(proxy.getValue("Boeing Company"))
console.log(proxy.getValue("Boeing Company"))
console.log(proxy.getValue("Boeing Company"))
console.log(proxy.getValue("Boeing Company"))
console.log(proxy.getValue("Boeing Company"))
console.log(proxy.getValue("Boeing Company"))
console.log(proxy.getValue("Boeing Company"))
console.log(proxy.getValue("Boeing Company"))
console.log(proxy.getValue("Boeing Company"))
console.log(proxy.getValue("Coca-Cola"))
console.log(proxy.getValue("Coca-Cola"))
console.log(proxy.getValue("Coca-Cola"))
console.log(proxy.getValue("Coca-Cola"))
console.log(proxy.getValue("Coca-Cola"))
console.log(proxy.getValue("Coca-Cola"))
console.log(proxy.getValue("Coca-Cola"))

