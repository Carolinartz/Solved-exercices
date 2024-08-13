/*Christmas Eve is almost upon us, so naturally we need to prepare some
 milk and cookies for Santa! Create a function that accepts a Date object
  and returns true if it's Christmas Eve (December 24th) and false 
  otherwise. Keep in mind JavaScript's Date month is 0 based, meaning 
  December is the 11th month while January is 0.*/
  function timeForMilkAndCookies(date) {
    // Almaceno los valores en constantes
    const day = date.getDate();
    const month = date.getMonth();
    
    // Evaluar los condicionales con if
    if (day === 24 && month === 11) {
        return true;
    } else {
        return false;
    }
}

