function bubbleSort(arr) {
  let swapped;

  do {
    swapped = false;
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        swapped = true;
      } else {
      }
    }
  } while (swapped);
}

const arr = [0, 20, -2, -4, -6];
bubbleSort(arr);
console.log(arr);
// O(n^2)
