const getPrintableNames = (people) => {
    people.forEach(element => {
        let nombre = element.split(" ");
       let primeraletra= nombre[0].substr(0,1);
       let mayus=primeraletra.toUpperCase();
       let apellido=nombre[1][0].toUpperCase();
       let restapellido=nombre[1].substr(1);
        let resultado= mayus+"."+" "+apellido+restapellido;
      console.log(resultado);  
    });
//declaro varivale para almacenar que ?? info, array split 
// regrex --mejor de una manera mas sencilla
//variable count 

//funcion reconozca lass parlabras 
// 

}


const people = ['marie curie', 'Mary Anning', 'ada lovelace', 'SALLY RIDE'];
console.log(getPrintableNames(people));
// [ 'M. Curie', 'M. Anning', 'A. Lovelace', 'S. Ride' ]