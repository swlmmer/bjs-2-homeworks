"use strict"
function solveEquation(name, ...roots) {
  let a = 10;
  let b = 10;
  let c = 10;
  let d = Math.pow(b, 2) - 4*a*c;
  console.log(`Ответ: ${name}`);

  if (d < 0) {
    let root = 0;
    console.log(`${roots}`);
    return root;
  } else if (d === 0) {
    let root1 = -b/2*a;
    console.log(`${roots}`);
  } else if (d > 0) {
    let root2 = (-b + Math.sqrt(d) )/(2*a);
    let root3 = (-b - Math.sqrt(d) )/(2*a);
    console.log(`${roots}`);
  }
}
  
  solveEquation('Решение уравнения: ', root, root1, root2, root3);
  
