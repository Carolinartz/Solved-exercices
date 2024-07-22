function SumaPositivos(array) {
    let suma=0;
    for (let i=0; i< array.length; i++) {
        if (array[i]>0){
            suma= suma + array [i]; //suma+=array[i]
        }
    }
    return suma;
}