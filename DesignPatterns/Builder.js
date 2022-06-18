function Pies(imie, waga, rasa, płeć)
{
    this.imie = imie;
    this.waga = waga;
    this.rasa = rasa;
    this.płeć = płeć;
}


function PiesBuilder(imie, rasa, płeć)
{
    this.imie = imie;
    this.rasa = rasa;
    this.płeć = płeć;

    this.setWaga = function(waga)
    {
        this.waga = waga;
        return this;
    }

    this.build = funtion()
    {
        return new Zwierzak(this.imie, this.waga, this.rasa, this.płeć);
    }
}


const fafik = new ZwierzakBuilder('Fafik', 'Golden Retriever', 'suczka').setWaga(27);
console.log (fafik)