// Here is the full Implementation of the Quick sort with the help of Hoares Scheme.
// It's Average case and best case space complexity is O(N logN) and O(N^2) in wrost case.
// It is Inplace Algo only takes O(log N) space in avg and best case while O(N) in wrost case.
// It's or its varinants are the most preferable method for sorting elements of primitive data types by many libraries in-built function.


// This schemes return the index of the element on left of which all elements are smaller and greater on right by doing inplace sorting.
const HoaresPartition = (arr,low,high)=>{
    let pivot = arr[low];
    let i=low-1,j=high+1;

    while(true){
        process.stdout.write(`piviot : ${pivot} => `);
        console.log(arr.slice(low,high+1));
      do{
        i++;
      }while(arr[i]<pivot);
      do{
        j--;
      }while(arr[j]>pivot);

      if(i>=j){
        return j;
      }
      [arr[i],arr[j]]=[arr[j],arr[i]];

    }

}

//Lumuto Scheme
// Less Efficient than Hoares partition scheme.
// Moves the piviot at its exact position inside the array.
const LumutoPartitioning = (arr,low,high)=>{
    let pivot = arr[high];
    let i = low-1;
    for(let j=low;j<high;j++){
        if(arr[j]<=pivot){
            i++;
            [arr[j],arr[i]] = [arr[i],arr[j]];
        }
    }
    [arr[i+1],arr[high]]=[arr[high],arr[i+1]];
    return i+1;
}

// Quick Sort will do frequent paritions to sort the given elements.
const QuickSort = (arr,low,high)=>{
    if(low<high){
        let piviot = LumutoPartitioning(arr,low,high);
        // console.log("Index = ",piviot);
        // Self recursive call according to Hoares scheme
        // QuickSort(arr,low,piviot);
        // QuickSort(arr,piviot+1,high);

        // Self recursive call according to Lumuto scheme
        QuickSort(arr,low,piviot-1);
        QuickSort(arr,piviot+1,high);
    }
}

let arr = [42, -10, 7, 3, 9, -15, 100, 55, 22, 1];
QuickSort(arr,0,arr.length-1);
console.log(arr);