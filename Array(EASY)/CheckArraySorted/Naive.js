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
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[i]) {
                return false;
            }
        }
    }
    return true;
}

let arr = [7, 2, 30, 10];
console.log(isSorted(arr) ? "true" : "false");