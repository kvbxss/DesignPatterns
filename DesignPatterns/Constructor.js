function Car(model, year, przebieg) {

    this.model = model;
 
    this.year = year;

    this.przebieg = przebieg;



    this.toString = function () {


    return this.model + " przejechał " + this.przebieg + " km";


    };
   }
   var civic = new Car("Honda Civic", 2009, 20000);
   var mondeo = new Car("Ford Mondeo", 2010, 5000);
   console.log(civic.toString());
   console.log(mondeo.toString());