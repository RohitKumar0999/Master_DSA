

const HoaresPartition = (arr,low,high)=>{
    let pivot = arr[low];
    let i=low-1,j=high+1;

    while(true){
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

let arr = [5, 10, 9, 12];
// [5,3,8,4,2,7,1,10]  pivot=5  swap => (5,1)
//  ^           ^
// [1,3,8,4,2,7,5,10]  pivot=5  swap => (8,2)
//      ^   ^
// [1,3,2,4,8,7,5,10]  pivot=5  swap => (8,2)
    //    ^ ^
// return 3 (position of j)

let n = arr.length;
console.log(HoaresPartition(arr, 0, n - 1));

console.log(arr);
