//Dada una oración, retorna el número de palabras cuya primera y última
// letra sean iguales.

//recibe una array 
//hago splic en el array
function countSameEnds(sentence) {
    // Dividir la cadena en palabras ignorando signos de puntuación
    let words = sentence.split(/\W+/);

    // Filtrar palabras que empiezan y terminan con la misma letra
    let count = words.filter(word => 
        word.length > 1 && 
        word[0].toLowerCase() === word[word.length - 1].toLowerCase()
    ).length;

    return count;
}