const CountAndMerge = (arr, low, mid, high) => {
  let m = mid - low + 1;
  let n = high - mid;
  let left = new Array(m);
  let right = new Array(n);
  let i = 0,
    j = 0,
    k = low;

  let inversionCount = 0;
  
  for (let i = 0; i < m; i++) left[i] = arr[low + i];
  for (let j = 0; j < n; j++) right[j] = arr[mid + j + 1];


  while (i < m && j < n) {
    if (left[i] <= right[j]) {
      arr[k++] = left[i++];
    }
    else {
      arr[k++] = right[j++];
      inversionCount += (m-i);
    }
  }
  while (i < m) {
    arr[k++] = left[i++];
  }
  while (j < n) {
    arr[k++] = right[j++];
    }

    return inversionCount;
};

const InversionCount = (arr, low, high) => {
  let res = 0;
  if (low < high) {
    let mid = Math.floor((low + high) / 2);
    res = res + InversionCount(arr, low, mid);
    res = res + InversionCount(arr, mid + 1, high);
    res = res + CountAndMerge(arr, low, mid, high);

  }
  return res;
};

let arr = [2, 3, 2, 1, 3, 1, 2, 3, 1, 4, 2, 3, 4, 5, 5, 5];
let n = arr.length;
console.log(InversionCount(arr, 0, n - 1));
