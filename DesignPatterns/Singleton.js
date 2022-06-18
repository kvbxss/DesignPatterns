function Piec(grzeje)
{
    this.grzeje = grzeje
}

const Singleton = (function(){
    function ManagerPieca()
    {
        this.numGrzeje = 0
    }

    let pManager

    function utworzManageraPieca()
    {
        pManager = new ManagerPieca()
        return pManager
    }

    return {
        zwrocManageraPieca:()=>{
            if(!pManager)
                pManager = utworzManageraPieca()
             return pManager
        }
    }
})()

const ManagerPieca = Singleton.zwrocManageraPieca();
const ManagerPieca2 = Singleton.zwrocManageraPieca();

console.log(ManagerPieca === ManagerPieca2)