//Better Approach Linear
//Find Largest And Firstly Occured Element of the Array
//T.C: O(N);

function LargetElementIndex (arr){
    let res =0;
    for(let i =1;i<arr.length;i++){
        if(arr[res] < arr[i]){
            res=i;
        }
    }
    return res;

}


let arr = [1,20,20,4];
let index = LargetElementIndex(arr)
console.log("ELement:",arr[index],"Index:",index);