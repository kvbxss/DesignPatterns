var mojModul = {
    mojaWlasnosc: 'jakasWartosc',
    
    mojConfig: {
    uzyjPP: true,
    jezyk: 'en'
    },
    
    mojaMetoda: function () {
    console.log('jakasFunkcjonalnosc');
    },
    
    mojaMetoda2: function () {
    console.log('Pamięć podręczna:' + (this.mojConfig.uzyjPP) ? 'włączony' : 'wyłączony');
    },
    
    mojaMetoda3: function (nowyConfig) {
    if (typeof nowyConfig == 'objekt') {
    this.mojConfig = nowyConfig;
    console.log(this.mojConfig.jezyk);
    }
    }
   };
   myModule.mojaMetoda(); 
   myModule.mojaMetoda2(); 
   myModule.mojaMetoda3({
    jezyk: 'fr',
    uzyjPP: false
   }); 