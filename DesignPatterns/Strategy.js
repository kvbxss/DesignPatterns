function DPD()
{
    this.calculate = paczka=>{
        return 2.50
    }
}

function InPost()
{
    this.calculate = paczka=>{
        return 2
    }
}

function Pocztex()
{
    this.calculate = paczka=>{
        return 4.3
    }
}

function Dostawa()
{
    this.firma = ""
    this.setStrategy = (firma)=>{
        this.firma = firma
    }
    this.calculate = paczka=>{
        return this.firma.calculate(paczka)
    }
}
const dpd = new DPD()
const inpost = new InPost()
const pocztex = new Pocztex()

const paczka = {z: 'Wrocław', do: 'Sopot', waga:2.5}

const dostawa = new Dostawa()
dostawa.setStrategy(dpd)
console.log("DPD: " + dostawa.calculate(paczka))

dostawa.setStrategy(inpost)
console.log("InPost: " + dostawa.calculate(paczka))

dostawa.setStrategy(pocztex)
console.log("Pocztex: " + dostawa.calculate(paczka))
