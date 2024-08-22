// Check if an array is sorted

// Given an array of size n, write a program to check if it is sorted in ascending order or not. Equal values are allowed in an array and two consecutive equal values are considered sorted.

// Examples: 

// Input : 20 21 45 89 89 90
// Output : Yes

// Input : 20 20 45 89 89 90
// Output : Yes

// T.C : O(N^2)
// S.C : O(1)

function isSorted(arr) {
    for(let i=1; i<arr.length; i++){
        if(arr[i-1]>arr[i])
            return false;
    }
    return true;
}

let arr = [7, 9, 10, 30];
console.log(isSorted(arr));