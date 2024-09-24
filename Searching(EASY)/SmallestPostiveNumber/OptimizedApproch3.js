/*
T.C: O(N)
S.C: O(1)

-The idea is to swap the elements which are in the range 1 to N should be placed at their respective indexes.


=>Follow the steps below to solve the problem:

-Traverse the array, Ignore the elements which are greater than N and less than 1.
-While traversing, check if a[i] ? a[a[i]-1] holds true or not .
-If the above condition is true then swap a[i] and a[a[i] – 1]  and swap until (a[i] ? a[a[i] – 1]) condition fails.
-Traverse the array and check whether a[i] ? i + 1 then return i + 1.
-If all are equal to its index then return N+1.

*/

function firstMissingPositive(arr, n)
{
    // Check if 1 is present in array or not
    for(let i = 0; i < n; i++)
    {
       
      // Loop to check boundary
      // condition and for swapping
      while (arr[i] >= 1 && arr[i] <= n
             && arr[i] != arr[arr[i] - 1]) {
         
        let temp=arr[arr[i]-1];
            arr[arr[i]-1]=arr[i];
            arr[i]=temp;
      }
    }
 
    // Finding which index has value less than n
    for(let i = 0; i < n; i++)
        if (arr[i] != i + 1)
            return (i + 1);
 
    // If array has values from 1 to n
    return (n + 1);
}

// Driver Code
let arr=[ 0, 10, 2, -10, -20 ];
let  n = arr.length;
let  ans = firstMissingPositive(arr, n);
console.log(ans);
                                
