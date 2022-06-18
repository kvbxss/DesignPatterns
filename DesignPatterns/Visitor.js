function Miner(name, goldOre)
{
    this.name = name
    this.goldOre = goldOre
}

Miner.prototype = {
    getGoldOre: function()
    {
        return this.goldOre
    },
    setGoldOre: function(gold)
    {
        this.goldOre = gold
    },
    accept: function(visitorFunction)
    {
        visitorFunction(this)
    }
}

///////////////////////////////////////

const jamesWest = new Miner("James West", 56)
console.log(jamesWest.getGoldOre())

function ExtraGold(min)
{
    min.setGoldOre(min.getGoldOre() * 2)
}

jamesWest.accept(ExtraGold)
console.log(jamesWest.getGoldOre())