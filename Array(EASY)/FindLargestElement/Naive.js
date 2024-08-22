//Find Largest And Firstly Occured Element of the Array
//T.C: O(n^2)  S.C: O(1)

function LargetElementIndex (arr){
    for(let i =0;i<arr.length;i++){
      let flag=true;
      for(let j=0;j<arr.length;j++){
          if(arr[i]<arr[j]){
              flag=false;
              break;
          }
      }
      if(flag===true){
          return i;
      }
    }
}


let arr = [1,20,20,4];
let index = LargetElementIndex(arr)
console.log("ELement:",arr[index],"Index:",index);