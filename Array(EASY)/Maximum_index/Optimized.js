// Brute Force Method
// Time Complexity: O(n)
// Auxiliary Space: O(1)
// Company Tag: VMWare Amazon Microsoft MakeMyTrip
// Given an array arr of positive integers.
// The task is to return the maximum of j - i subjected to the constraint of arr[i] < arr[j] and i < j.

// Examples:

// Input: arr[] = [1, 10]
// Output: 1
// Explanation: arr[0] < arr[1] so (j-i) is 1-0 = 1.

function MaximumIndex(arr){
    let left_min = new Array(arr.length);
    left_min[0] = arr[0];

    for(let i =1; i<arr.length;i++)
    {
        left_min[i] = Math.min(left_min[i-1],arr[i]);
    }

    let right_max = new Array(arr.length);
    right_max[right_max.length-1] = arr[arr.length-1];

    for(let i = arr.length-2;i>=0;i--){
        right_max[i] = Math.max(right_max[i+1],arr[i]);
    }

    let i=0, j=0, maxDiff=-1 ;

    while(i<arr.length && j<arr.length){
        if(left_min[i]<right_max[j]){
            maxDiff = Math.max(maxDiff,j-i);
            j++;
        }
        else{
            i++;
        }
    }


    return maxDiff;
    }
    
    let Max_Diff = MaximumIndex([34, 8, 10, 3, 2, 80, 30, 33, 1])
    console.log(Max_Diff);
    
    