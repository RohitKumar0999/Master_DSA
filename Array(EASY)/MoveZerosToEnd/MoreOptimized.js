// Given an array of n numbers. The problem is to move all the 0’s to the end of the array,
//  while maintaining the order of the other elements. Only single traversal of the array is required.
// Examples: 
 

// Input : arr[]  = {1, 2, 0, 0, 0, 3, 6}
// Output : 1 2 3 6 0 0 0

// Input: arr[] = {0, 1, 9, 8, 4, 0, 0, 2, 7, 0, 6, 0, 9}
// Output: 1 9 8 4 2 7 6 9 0 0 0 0 0

// T.C=> O(N)
// S.C=> O(1)

var moveZeroes = function(arr) {
    let count = 0;
    let n = arr.length;
    for(let i=0,lastNonZero=0;i<n;i++)
    if(arr[i]!==0){
     [arr[lastNonZero],arr[i]] = [arr[i],arr[lastNonZero]];
     lastNonZero++;
    }
     return arr;
 
 };