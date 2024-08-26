//Problem :- Rearrange an array so that arr[i] becomes arr[arr[i]] with O(1) extra space
// T.c :- O(N)
// S.c :- O(1)
// Approch => Divident = Divisor*Quotient + Remainder.

const RearrangeArray = (arr,N)=>{
    
    for(let i=0;i<N;i++)
        arr[i] += (arr[arr[i]]%N)*N;

    for(let i=0;i<N;i++)
        arr[i] = Math.floor(arr[i]/N);

     return arr;
}

let arr = [4, 0, 2, 1, 3];
RearrangeArray(arr);
console.log(arr); // Output: [3, 4, 2, 0, 1]