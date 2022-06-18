const closet = [1, "sock", false, 3.14]

function Iterator(closet)
{
    this.closet = closet
    this.index = closet.length - 1
}

Iterator.prototype = {
    hasNext: function()
    {
        return this.index >= 0
    },
    next: function()
    {
        return this.closet[this.index--]
    }
}

const iter = new Iterator(closet)
while(iter.hasNext())
    console.log(iter.next())

