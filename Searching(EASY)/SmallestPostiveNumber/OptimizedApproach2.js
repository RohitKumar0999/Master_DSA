/*
T.C: O(N)
S.C: O(1)

Approach: Smallest positive number missing from an unsorted array by changing the input Array
The idea is to mark the elements in the array which are greater than N and less than 1 with 1.


Follow the steps below to solve the problem:

-The smallest positive integer is 1. First, we will check if 1 is preseynt in the array or not. If it is not present then 1 is the answer.
-If present then, again traverse the array. The largest possible answer is N+1 where N is the size of the array. 
-When traversing the array, if we find any number less than 1 or greater than N, change it to 1. 
-This will not change anything as the answer will always be between 1 to N+1. Now our array has elements from 1 to N.
-Now, for every ith number, increase arr[ (arr[i]-1) ] by N. But this will increase the value more than N. So, we will access the array by arr[(arr[i]-1)%N].
-We will find now which index has a value less than N+1. Then i+1 will be our answer. 
*/

function findMissing(arr,n){
    let oneExistBoolean = 0;
    for(let i=0;i<n;i++){
        if(arr[i]===1){
        oneExistBoolean = 1;
        break;
          
        }
    }
    
    if(oneExistBoolean == 0){
    return 1;
    }
    
    for(let i=0;i<n;i++){
        if(arr[i]<1 || arr[i]>n){
           arr[i] = 1;
        }
    }
    console.log("after 1 conversion",arr)
    for(let i=0;i<n;i++){
        console.log("Value:",arr[i]);
        arr[(arr[i]-1)%n] = arr[arr[i]-1]+n;  // %n if values are changed before by adding then to get the orignal value.
        // if(arr[i]==2){
        //   arr[arr[i]-1] += n;
        //   console.log("value", arr[arr[i]-1])
        // }
    }
    console.log(arr);
    
    for(let i=0;i<n;i++){
        if(arr[i]<=n)
        return i+1;
    }
    
    return n+1;
    }
    
console.log(findMissing([-12, -45, 39, 32, 0, 13, -36, 17, 17, -29, -34, 15, 15, -26, -44, 8, -9, -30, -25, 41, 
  38, 29, -19, -22, 1, 40, 19, 47, -37, 9, 41, 2, -34, -18, 36, 16, 45, -50, 35, -36, 23, 
  -49, 29
],43))