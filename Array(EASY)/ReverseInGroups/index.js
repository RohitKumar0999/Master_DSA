// Given an array arr of positive integers. Reverse every sub-array group of size k.

// Note: If at any instance, k is greater or equal to the array size, then reverse the entire array. 
// You shouldn't return any array, modify the given array in place.

// T.C : O(N)
// S.C : O(1)

// [1,2,3,4,5,6]


function ReverseArrayInGroups(arr,k){
        for(let i=0;i<arr.length;i=i+k){
           let left =i;
           let right = Math.min(arr.length,i+k-1);

           while(left<right)
           {
            [arr[left],arr[right]] = [arr[right],arr[left]];
            left++;
            right--;
           }
        }
  return arr;
}

console.log(ReverseArrayInGroups([1, 2, 3, 4, 5],3));