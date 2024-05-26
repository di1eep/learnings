let students = 30;
students = students + 1;  // students += 1;    // addition
students = students - 1;  // students -= 1;      // substaraction
students = students * 1;  // students *= 2;      // multiplication
students = students / 1;  // students /= 2;      // division
students = students % 1;  // students %= 2;      // modulous division (only gives the remainder out)
students = students ** 2;  // students **= 2;     // power of


students++;
students--;

/// operattor presidence 

/*
   opeartor presidence
   1. parenthesis ()
   2. exponents
   3. multiplications & division & modulo (left to right either mult or div or modulo  )
   3. addition & substarction (left to right either add or sub)
*/

let result = 1 + 2 * 3 + 4 ** 2;
console.log(result);
