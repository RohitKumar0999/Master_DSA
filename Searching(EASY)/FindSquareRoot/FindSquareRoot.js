
const FindSquareRoot = (element)=>{
    let low = 1;
    let high=element
    let res=-1;
    while(low<=high){
        let mid = Math.floor((low+high)/2);
        if((mid)*(mid) == element){
            return mid;
            }
        else if(element>(mid*mid)){
            low = mid+1; 
            res = mid;
        }
        else{
            high = mid-1;
        }
    }

    return res;
}
console.log("SqaureRoot",FindSquareRoot(25));