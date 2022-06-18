function Uzytkownik(imie)
{
  this.imie = imie
  this.chat = null
}

Uzytkownik.prototype = {
  send: function(wiadomosc, toUzytkownik)
  {
    this.chat.send(wiadomosc, this, toUzytkownik)
  },
  receive: function(wiadomosc, fromUzytkownik)
  {
    console.log(`${fromUzytkownik.imie} to ${this.imie}: ${wiadomosc}`)
  }
}

function chat()
{
  this.Uzytkowniks = {}
}

chat.prototype = {
  addUzytkownik: function(Uzytkownik)
  {
    this.Uzytkowniks[Uzytkownik.imie] = Uzytkownik
    Uzytkownik.chat = this
  },
  send: function(wiadomosc, fromUzytkownik, toUzytkownik)
  {
    toUzytkownik.receive(wiadomosc, fromUzytkownik)
  }
}

const chat = new chat()

const bob = new Uzytkownik("Kacper")
const john = new Uzytkownik("Kuba")
const tim = new Uzytkownik("Blazej")

chat.addUzytkownik(kacper)
chat.addUzytkownik(kuba)
chat.addUzytkownik(blazej)

kacper.send("Cześć, Kuba", kuba)
kuba.send("Co u Ciebie, Kacper", kacper)
blazej.send("Kuba wszystko w porządku?", kuba)