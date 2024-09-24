
let sum = 0;
const SumOfDigits = (num)=>{

    if(num == 0)
        return 0;
    
    return  SumOfDigits(Math.floor(num/10))+num%10;

}

console.log(SumOfDigits(123));

// 1 2 3 
        
             
                    