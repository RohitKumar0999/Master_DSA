// This is the Merging Function of  Merge Sorting Technique
// Time Complexity :-  theta(N)  linear time complexity.
// Space Complexity :- theta(N) linear space complexity

const MergeFunc = (arr,low,mid,high)=>{
    let n1= mid-low+1 , n2 = high-mid; 
    let left = [] , right = [] ;
    for(let i=0; i<n1; i++)
        left.push(arr[low+i]);
    for(let j=0;j<n2;j++)
        right.push(arr[mid+j+1])

    let i=0,j=0,k=low;

    while(i<n1 && j<n2){
        if(left[i]<=right[j]){
            arr[k] = left[i];
            i++;
            k++;
        }
        else{
            arr[k] = right[j];
            j++;
            k++;
        }
    }
    while(i<n1){
        arr[k] = left[i];
        i++;
        k++;
    }

    while(j<n2){
        arr[k] = right[j];
        j++;
        k++;
    }
    return arr;
}

let arr = [10,15,20,40,8,11,55];
MergeFunc(arr,0,3,6);
console.log(arr);  // Inplace algorithm.