// Problem : Match Stick Game Problem
/**
 * @param {BigInt} n
 * @return {number}
 */
const  MatchStickGame = (n)=>{


       if(n%BigInt(5) == BigInt(0)){
           return -1;
       }
       else{
           return n%BigInt(5);
       }
}


let NoOfMatchStick = BigInt(21);
console.log(MatchStickGame(NoOfMatchStick));