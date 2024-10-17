/*

Problem: Majority Element
Difficulty: Medium
Given an array arr. Find the majority element in the array. If no majority exists, return -1.

* A majority element in an array is an element that appears strictly more than arr.size()/2 times in the array.
Expected T.C: O(N)
Expected S.C: O(1)

T.C of given solution: O(N^2)
S.C of given solution: O(1)
*/

function MajorityElement(arr){
    let n = arr.length;
    for(let i=0;i<n;i++){
      let occuranceCount=0;
      for(let j=0;j<n;j++){
        if(arr[i]==arr[j]){
          occuranceCount++;
        }
      }
      if(occuranceCount>n/2){
        return arr[i];
      }
    }
    return -1;
    }
    
    console.log(MajorityElement( [1, 2, 3, 4, 1, 2, 3, 4]))