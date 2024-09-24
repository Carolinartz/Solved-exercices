const isPrime = (n) => {
    // Manejo de números menores que 2
    if (n < 2) return false; 
  
    // Verificamos si hay divisores entre 2 y la raíz cuadrada de n
    for (let i = 2; i <= Math.sqrt(n); i++) {
      if (n % i === 0) {
        return false; // Si encontramos un divisor, no es primo
      }
    }
  
    return true; // Si no encontramos divisores, es primo
  };