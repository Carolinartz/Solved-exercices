function CuentaSuma(array){
    if(!array || array.length === 0){
        return [];
    }
    let recuento =0;
    let sumaNeg = 0;
    for (let i = 0; i < array.length ; i++){
        if(array[i]>0){
            recuento++;
        } else if (array[i]<0){
            sumaNeg+= array[i];
        }
        return [recuento,sumaNeg];
          }
}