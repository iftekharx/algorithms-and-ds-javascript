function search(arr, target, leftIndex, rightIndex) {
  if (leftIndex > rightIndex) {
    return -1;
  }
  let middleIndex = Math.floor((leftIndex + rightIndex) / 2);

  if (target === arr[middleIndex]) {
    return middleIndex;
  }

  if (target < arr[middleIndex]) {
    return search(arr, target, leftIndex, middleIndex - 1);
  } else {
    return search(arr, target, middleIndex + 1, rightIndex);
  }
}
function recursiveBS(arr, target) {
  return search(arr, target, 0, arr.length - 1);
}

arr = [-5, 2, 4, 6, 10];
target = 6;

console.log(recursiveBS(arr, target));

// O(log n)
