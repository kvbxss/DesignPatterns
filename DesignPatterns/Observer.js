function Geography()
    {
        this.observers = []
    }


Geography.prototype = {
    subscribe: function(fn)
    {
        this.observers.push(fn)
    },
    unsubscribe: function(fnTORemove)
    {
        this.observers = this.observers.filter( fn => {
            if(fn != fnTORemove)
                return fn
        })
    },
    fire: function()
    {
        this.observers.forEach( fn => {
            fn.call()
        })
    }
}

const geo = new Geography()

function ObserverOne(){
    console.log("ObserverOne Firing")
}

function ObserverTwo(){
    console.log("ObserverTwo Firing")
}

geo.subscribe(ObserverOne)
geo.subscribe(ObserverTwo)
geo.unsubscribe(ObserverOne)

geo.fire()
