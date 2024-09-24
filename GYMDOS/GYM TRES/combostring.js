//Implementa la función comboString para que reciba dos cadenas, 
//a y b, y devuelva una cadena de la forma corta + larga + corta, 
//con la cadena más corta en el exterior y la cadena más larga en el
// interior. Las cadenas no tendrán la misma longitud, pero pueden estar
// vacías (longitud 0).
 function comboString (a,b) {
    if(a.length<b.length){
        return a+b+a;
    } else {
        return b+a+b;
    }

 }
