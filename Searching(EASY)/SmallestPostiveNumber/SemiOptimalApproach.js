// T.C = O(N);
// S.C = O(N)

const SmallestPosNum = (arr) => {
  let N = arr.length;
  let BoolArr = new Array(N + 1).fill(false);

  for (let i = 0; i < N; i++) {
    if (arr[i] > 0 && arr[i] <= N) {
      BoolArr[arr[i]] = true;
    }
  }
  for (let i = 1; i < N; i++) {
    if (!BoolArr[i]) {
      return i;
    }
  }
  return N+1;
};

console.log(SmallestPosNum([0, 10,1, 2, -10, -20]));
