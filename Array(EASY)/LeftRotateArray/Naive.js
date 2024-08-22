
// Given an array of integers arr[] of size N and an integer, 
// the task is to rotate the array elements to the left by one position.

// Examples:  

// Input: 
// arr[] = {1, 2, 3, 4, 5, 6, 7}
// Output: 2 3 4 5 6 7 1

// Input: arr[] = {3, 4, 5, 6, 7, 1, 2}
// Output: 4 5 6 7 1 2 3

// T.C => theta(N)
//S.C => theta(N)


function Rotate(arr){
    let newArr = new Array();
    for(let i=1;i<arr.length;i++)
        newArr.push(arr[i])

    newArr.push(arr[0]);
        
}