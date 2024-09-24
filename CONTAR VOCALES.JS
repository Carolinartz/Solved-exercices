//IMPLEMNTA LA FUNCION countVowels(str)
const countVowels = (str) => {
    let count = 0;
    const vowels = "aeiouAEIOU";

    for(let i = 0; i<str.length; i++) {
        if (vowels.includes(str[i])){
            count++;
        }
    }
return count
}
//iniciar un contador declarando let
//iterar con for each por cada carectre del strings
//condicion si es una vocal incrementar el contador 
//retornar el contador