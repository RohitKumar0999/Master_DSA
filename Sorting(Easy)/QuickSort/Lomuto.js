/*
  |
 1.  [1,2,5,33,2,3,22]
 2.  [1,2,5,2,3,32,22];

 3. [1,2,5,2,3,22,32];
// This technique is used by QuickSort for Sorting.
// It's T.C is O(n)
// It is Inplace Algorithm.
// It does'nt promises stability.

Idea: 
-> The main idea here is to use last element as piviot and use two pointer i and j 
   while j is linearly traversing by increment and when got less than/Equal to element 
   from pivot then increment i and swap with value at current position of j, 
-> By this approach only 
  


*/

const LumutoPartitioning = (arr,low,high)=>{
    let pivot = arr[high];
    let i = -1;
    for(let j=low;j<high;j++){
        if(arr[j]<=pivot){
            i++;
            [arr[j],arr[i]] = [arr[i],arr[j]];
        }
    }
    [arr[i+1],arr[high]]=[arr[high],arr[i+1]];
    return arr;
}

let arr = [10, 7, 118, 9, 11, 5, 21, 13, 37, 91];
let n = arr.length;
console.log(LumutoPartitioning(arr,0,n-1));