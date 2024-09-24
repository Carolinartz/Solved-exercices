const computeSumBetween = (num1, num2) => {
    let suma = 0;
    
    if (num2>num1) {
        
        for (let i = num1; i<num2; i++){
            suma = suma + i;
        
        }
        return suma;
    } else { return 0;
}

    
  };
  console.log (computeSumBetween(1, 4))