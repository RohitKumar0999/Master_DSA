// T.C : Theta(N^2) Fixed
// S.C : O(1)

const SelectionSort = (arr)=>{
    let n= arr.length;

    for(let i=0;i<n-1;i++){
        let min_ind = i;
        for(let j=i+1;j<n;j++){
            if(arr[j]<arr[min_ind]){
                min_ind = j;
            }
        }
    [arr[i],arr[min_ind]] = [arr[min_ind],arr[i]];
    }
    return arr;
}

console.log(SelectionSort([6,4,2,78,32,2,3,4,55,3,1]));