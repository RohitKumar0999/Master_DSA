// Given an array of n numbers. The problem is to move all the 0’s to the end of the array,
//  while maintaining the order of the other elements. Only single traversal of the array is required.
// Examples: 
 

// Input : arr[]  = {1, 2, 0, 0, 0, 3, 6}
// Output : 1 2 3 6 0 0 0

// Input: arr[] = {0, 1, 9, 8, 4, 0, 0, 2, 7, 0, 6, 0, 9}
// Output: 1 9 8 4 2 7 6 9 0 0 0 0 0

// T.C=> O(N)
// S.C=> O(1)

function MoveZero(arr,n){
    let i=0,j=1;
    while(i<n && j<n){
      if(arr[i] === 0) {
          if(arr[j] != 0){
              [arr[i],arr[j]] = [arr[j],arr[i]];
              j++;
              i++;
          }
          else{
              j++;
          }
      }
      else{
          i++;
          j++;
      }
    }
    return arr;
}

console.log(MoveZero([8,5,9,0,0,7],6));