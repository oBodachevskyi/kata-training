// Задача 1 

 function res(a, b, result, carry, base) {
  if (a.length == 0 && b.length == 0 && !carry)
    return result;

  var left = parseInt(a.pop() || '0', 10);
  var right = parseInt(b.pop() || '0', 10);

  var l = left + right + (carry || 0);

  return res(a, b, l % base + (result || ""), Math.floor(l / base), base);
}

function add(a, b) {
  return res(a.toString().split(""), b.toString().split(""), "", "", 10).toString();
} 

// Задача 2 



 

/* console.log(validate('djI38D55')) //'djI38D55 - Expected true');
console.log(!validate('a2.d412')) //'a2.d412 - Expected false');
console.log(!validate('JHD5FJ53')) //'JHD5FJ53 - Expected false');
console.log(!validate('!fdjn345')) //'!fdjn345 - Expected false'); 
console.log(!validate('jfkdfj3j')) //'jfkdfj3j - Expected false'); 
console.log(!validate('123')) //'123 - Expected false');
console.log(!validate('abc')) //'abc - Expected false');
console.log(validate('Password123')) //'Password123 - Expected true');
 
 */
// Задача 3
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


 
// Задача 3
// link - https://www.codewars.com/kata/5526fc09a1bbd946250002dc/train/javascript

function findOutlier(integers){
  // кол -во парных чисел
  let arr = 0; 
  let result = null
  integers.forEach(item => {
    if(Number.isInteger(item/2)) {
      arr += 1
    }
  });
  if(arr !== 1) {
    integers.forEach(item => {
      if(!Number.isInteger(item/2)) {
         result = item
      }
  })
}
if(arr === 1) {
  integers.forEach(item => {
    if(Number.isInteger(item/2)) {
       result = item
    }
})


}
return result
}
// best practise

function findOutlier(int){
  var even = int.filter(a=>a%2==0);
  var odd = int.filter(a=>a%2!==0);
  return even.length==1? even[0] : odd[0];
}


