// Problem : Check array is Sorted and Rotated
// T.C : O(N)
// S.C : O(1)

function checkRotatedAndSorted(arr, num)
{
    let ascInver = 0;  //1
let descInver = 0;  //2
//arr.length= 4


for(let i=1;i<arr.length;i++){
if(arr[i-1]<arr[i]){
  descInver++;
}
else if(arr[i-1]>arr[i]){
  ascInver++;
}
}
if(descInver== arr.length-1 || ascInver== arr.length-1){
return false;
}

if((ascInver==1 && (descInver==arr.length-2)) || (descInver==1 && ascInver ==arr.length-2)){
return true

}

if(descInver>1 || ascInver>1){

return false
}
}
  
  let arr = [1,2,4,3]
  let output = checkRotatedAndSorted(arr);
  console.log(output);