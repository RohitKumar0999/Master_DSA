
// Given an array of integers arr[] of size N and an integer, 
// the task is to rotate the array elements to the left by one position.

// Examples:  

// Input: 
// arr[] = {1, 2, 3, 4, 5, 6, 7}
// Output: 2 3 4 5 6 7 1

// Input: arr[] = {3, 4, 5, 6, 7, 1, 2}
// Output: 4 5 6 7 1 2 3

// T.C => O(N)
//S.C => O(1)


function Rotate(arr){
    let lastElement = arr[0];
    for(let i=0;i < arr.length-1;i++){
        arr[i] = arr[i+1];
    }
    arr[arr.length-1]=lastElement;
    return arr;
}

console.log(Rotate([3, 4, 5, 6, 7, 1, 2]));
