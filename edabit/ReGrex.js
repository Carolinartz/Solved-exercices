//Groups and ranges indicate groups and ranges of expression characters. The regular expression x|y matches either "x" or "y".
//Create a regular expression to match all red flag and blue flag in a string. You must use | in your expression. Flags can come in any order.

const REGEXP = /red flag|blue flag/g;

"red flag".match(REGEXP);   
"blue flag".match(REGEXP);  
