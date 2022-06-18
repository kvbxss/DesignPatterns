function Guitarist(name, band)
{
    this.name = name
    this.band = band
    this.type = "Guitarist"
}

function Singer(name, band)
{
    this.name = name
    this.band = band
    this.type=  "Singer"
}

function Drummer(name, band)
{
    this.name = name
    this.band = band
    this.type=  "Drumer"
}

function Bassist(name, band)
{
    this.name = name
    this.band = band
    this.type=  "Drumer"
}

function MusicianFactory()
    {
        this.create = (name,band,type) => {
            switch(type)
            {
                case 1:
                    return new Guitarist(name, band)
                    break;
                case 2:
                    return new Singer(name, band)
                    break;
                case 3:
                    return new Drummer(name, band)
                    break;
                case 4:
                    return new Bassist(name, band)
                    break;
            }
        }
    }

    function say()
    {
        console.log("Hi, I am "+ this.name + " from "+ this.band+" and I am a " + this.type)
    }

    const musicianFactory = new MusicianFactory()
    const musicians = []

    musicians.push(musicianFactory.create("Jon Bon Jovi","Bon Jovi", 2))
    musicians.push(musicianFactory.create("Slash","Guns N'Roses", 1))
    musicians.push(musicianFactory.create("Jim Morrison","The Doors", 2))
    musicians.push(musicianFactory.create("Cliff Burton","Metallica", 4))
    musicians.push(musicianFactory.create("Lars Ulrich","Metallica", 3))

    musicians.forEach ( mus => {
        say.call(mus)
    })