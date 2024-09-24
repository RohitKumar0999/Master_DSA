// Follow the steps below to solve the problem:

// Segregate positive numbers from others i.e., move all non-positive numbers to the left side.
// Now ignore non-positive elements and consider only the part of the array which contains all positive elements. 
// Traverse the array containing all positive numbers and to mark the presence of an element x, change the sign of value at index x to negative. 
// Traverse the array again and print the first index which has a positive value. 
// T.C: O(N)
// S.C: O(1)

const partition = (arr) => {
    let N = arr.length;
    let pIndx = 0;
    for(let i=0;i<N;i++){
        if(arr[i]>0){
          [arr[i],arr[pIndx]] = [arr[pIndx],arr[i]];
          pIndx++;
        }
    }
    return pIndx;
  };

  const firstMissingPositive = (arr)=>{
    const k = partition(arr);     //After return all the values on left side of index k is postive.
    console.log(arr);
    console.log(k);
    for(let i=0;i<k;i++){
        // const val = Math.abs(arr[i]);
        // if(val-1<k && arr[val-1]>0){          //Here is the main logic we are using one less index to track
        // }
        console.log("In loop",arr);
        const val = Math.abs(arr[i]);  // Not encountered any changed -ve value again.
        console.log("value",val);
        if(arr[val-1]>0 && val-1<k)  //Imp:-  Checking for value with range of 1 to K and sign not changed by duplicate value.
        arr[val-1] = -(arr[val-1]);      // Each value means Oth index for value 1 and so on.
    }
     console.log("after",arr);
    for(let i=0; i<k; i++){
       if(arr[i]>0){
        return i+1;
       }
    }

    return k+1;
    console.log(arr);
  }
  
  console.log(firstMissingPositive([-47, 1, 4, 49, -18, 10, 26, 18, -11, -38, -24, 36, 44, -11, 45, 20, -16, 28, 17, -49, 47, -48, -33, 42, 2, 6, -49, 30, 36, -9, 15, 39, -6, -31, -10, -21, -19, -33, 47, 21, 31, 25, -41, -23, 17, 6, 47, 3, 36, 15, -44, 33, -31, -26, -22, 21, -18, -21, -47, -31, 20, 18, -42, -35, -10, -1, 46, -27, -32, -5, -4, 1, -29, 5, 29, 38, 14, -22, -9, 0, 43, -50, -16, 14, -26]));