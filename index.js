// Задача 1 

/* function res(a, b, result, carry, base) {
  if (a.length == 0 && b.length == 0 && !carry)
    return result;

  var left = parseInt(a.pop() || '0', 10);
  var right = parseInt(b.pop() || '0', 10);

  var l = left + right + (carry || 0);

  return res(a, b, l % base + (result || ""), Math.floor(l / base), base);
}

function add(a, b) {
  return res(a.toString().split(""), b.toString().split(""), "", "", 10).toString();
} */

// Задача 2 
function validate(password) {
    
 Test.assertSimilar
  }


 

/* console.log(validate('djI38D55')) //'djI38D55 - Expected true');
console.log(!validate('a2.d412')) //'a2.d412 - Expected false');
console.log(!validate('JHD5FJ53')) //'JHD5FJ53 - Expected false');
console.log(!validate('!fdjn345')) //'!fdjn345 - Expected false'); 
console.log(!validate('jfkdfj3j')) //'jfkdfj3j - Expected false'); 
console.log(!validate('123')) //'123 - Expected false');
console.log(!validate('abc')) //'abc - Expected false');
console.log(validate('Password123')) //'Password123 - Expected true');
 
 */
// Задача 2 
// link - https://www.codewars.com/kata/556deca17c58da83c00002db/train/javascript

function tribonacci(signature,n){
  let newArray = [...signature]
  if(n === 1) {
    return newArray.slice(0, 1)
  }
  if(n === 0) {
    return []
  }
  
  for (i = 0; i < n - signature.length; i++ ) {
    newArray.push(newArray[i] + newArray[i+1] + newArray[i+2]);
 
  }
  return newArray
}

/* 
 console.log(tribonacci([1,1,1],10)); //,[1,1,1,3,5,9,17,31,57,105]) 
 console.log(tribonacci([0,0,1],10)); //,[0,0,1,1,2,4,7,13,24,44]) 
 console.log(tribonacci([0,1,1],10)); //,[0,1,1,2,4,7,13,24,44,81])
 console.log(tribonacci([1,0,0],10)); //,[1,0,0,1,1,2,4,7,13,24])
 console.log(tribonacci([0,0,0],10)); //,[0,0,0,0,0,0,0,0,0,0])
 console.log(tribonacci([1,2,3],10)); //,[1,2,3,6,11,20,37,68,125,230])
 console.log(tribonacci([3,2,1],10)); //,[3,2,1,6,9,16,31,56,103,190])
 console.log(tribonacci([1,1,1],1)); //,[1])
 console.log(tribonacci([300,200,100], 0)) //,[])
 console.log(tribonacci([0.5,0.5,0.5],30)) // //,[0.5,0.5,0.5,1.5,2.5,4.5,8.5,15.5,28.5,52.5,96.5,177.5,326.5,600.5,1104.5,2031.5,3736.5,6872.5,12640.5,23249.5,42762.5,78652.5,144664.5,266079.5,489396.5,900140.5,1655616.5,3045153.5,5600910.5,10301680.5])  */
 
