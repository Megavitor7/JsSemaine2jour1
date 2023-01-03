//1
function addition (add1,add2) {
    let result = add1+add2
    console.log(result);
}
addition(1,2)
//2
function soustra (add1,add2) {
    let result = add1-add2;
    console.log(result);
}
soustra (1,2)
//3
function multi (add1,add2) {
    let result = add1*add2;
    console.log(result);
}
multi(1,2)
//4
function divi (add1,add2) {
    let result = add1add2;
    console.log(result)
}
divi(1,2)
//5
function modulo(a, b) {
    console.log(a % b);
  }
  //6
  function racineCarrey(x) {
    console.log(MathSqrt(x));

    
  }
  //7
  function Carrey(x) {
    console.log(MathPow(x));

    
  }
  //8
  function capitalize(str) {
    console.log(str[0].toUpperCase() + str.slice(1).toLowerCase());
  }
  //9
  function calcul(nbr1, operator, nbr2) {
    switch(operator) {
    case '+':
    return nbr1 + nbr2;
    case '-':
    return nbr1 - nbr2;
    case '*':
    return nbr1 * nbr2;
    case '/':
    return nbr1 / nbr2;
    default:
    return 'Invalid operator';
    }
    }
    
    console.log(calcul(5, '+', 10)); // 15
    console.log(calcul(20, '-', 5)); // 15
    console.log(calcul(4, '*', 2)); // 8
    console.log(calcul(10, '/', 2)); // 5
    console.log(calcul(5, '%', 2)); // Invalid operator

