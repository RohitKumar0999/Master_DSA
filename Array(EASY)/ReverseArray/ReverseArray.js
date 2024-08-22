// Given an array (or string), the task is to reverse the array/string.
// Examples : 
 

// Input  : arr[] = {1, 2, 3}
// Output : arr[] = {3, 2, 1}

// Input :  arr[] = {4, 5, 1, 2}
// Output : arr[] = {2, 1, 5, 4}

//T.C : O(N);

function ReverseArray(arr){
    let i=0,j=arr.length-1;
    while(i<j){
        [arr[i],arr[j]] = [arr[j],arr[i]];
        i++;
        j--;
    }
    return arr;
}

console.log(ReverseArray([4, 5, 1, 2]));