function binary(decimalNumber) {
    if (decimalNumber === 0) {
        return "0";
    }
    return decimalNumber.toString(2);
}