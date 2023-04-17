// const ar1 = [1,2,3,4,5,6,7,8,9,10];
// const ar2 = [11,12,13,14,15,16,17,18,19,20];
// const ar3 = [21,22,23,24,25,26,27,28,29,30];
// const ar4 = [31,32,33,34,35,36,37,38,39,40];
// const ar5 = [41,42,43,44,45,46,47,48,49,50];
const evenNum = [];

var qayim = {
    array1: [1,2,3,4,5,6,7,8,9,10],
    array2: [11,12,13,14,15,16,17,18,19,20],
    array3: [21,22,23,24,25,26,27,28,29,30],
    array4: [31,32,33,34,35,36,37,38,39,40],
    array5: [41,42,43,44,45,46,47,48,49,50]
  }

  for(let i=0; i<qayim.array1.length; i++){
    if(evenInOdd(qayim.array1[i]) != undefined || evenInOdd(qayim.array1[i]) != null){
      evenNum.push(evenInOdd(qayim.array1[i]));
      if(evenInOdd(qayim.array3[i]) != undefined || evenInOdd(qayim.array3[i]) != null){
        evenNum.push(evenInOdd(qayim.array3[i]));
      } 
      if(evenInOdd(qayim.array5[i]) != undefined || evenInOdd(qayim.array5[i]) != null){
        evenNum.push(evenInOdd(qayim.array5[i]));
      } 
    } 
  }
evenNum.sort(function(a,b){return a-b});
console.log(evenNum.join(","));

  // qayim.array1.forEach(evenInOdd); //using objects to call array
  // //ar2.forEach(evenInOdd); //using array directly
  // qayim.array3.forEach(evenInOdd);
  // //ar4.forEach(evenInOdd);
  // qayim.array5.forEach(evenInOdd);
  
  function evenInOdd(evenNum){
    if(evenNum%2 == 0){
      return evenNum;
    }
  }