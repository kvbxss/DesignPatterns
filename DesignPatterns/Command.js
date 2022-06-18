(function(){

    var managerAut = {
   
    
    zarzadajInformacji: function( model, id ){
    return 'Informacje o modelu ' + model +
    ' o ID ' + id + ' są takie';
    },

   
    
    kupAuto: function( model, id ){
    return 'Kupiełeś auto: '
    + id + ' ' + model;
    },
   
    // arrange a viewing
    zamowJazdeProbna: function( model, id ){
    return 'Zamówiłeś jazdę próbna w aucie: '
    + model + ' ( ' + id + ' ) ';
    }
   
    };
   
   })();