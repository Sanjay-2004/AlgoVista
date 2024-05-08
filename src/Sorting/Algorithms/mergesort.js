function mergeSort(arr) {
  let steps = [];
  const tempArray = arr.slice();

  function merge(start, middle, end) {
    let left = [];
    let right = [];

    for (let i = start; i <= middle; i++) {
      left.push(JSON.parse(JSON.stringify(tempArray[i])));
    }
    for (let i = middle + 1; i <= end; i++) {
      right.push(JSON.parse(JSON.stringify(tempArray[i])));
    }

    let leftIndex = 0,
      rightIndex = 0,
      tempIndex = start;

    while (leftIndex < left.length && rightIndex < right.length) {
      // tempArray[tempIndex].class = "bar-comparing";
      if (left[leftIndex].value <= right[rightIndex].value) {
        tempArray[tempIndex] = left[leftIndex];
        tempArray[tempIndex].class = "bar-swap";
        leftIndex++;
      } else {
        tempArray[tempIndex] = right[rightIndex];
        tempArray[tempIndex].class = "bar-swap";
        rightIndex++;
      }
      tempIndex++;
    }

    while (leftIndex < left.length) {
      tempArray[tempIndex] = left[leftIndex];
      tempArray[tempIndex].class = "bar-swap";
      leftIndex++;
      tempIndex++;
    }

    while (rightIndex < right.length) {
      tempArray[tempIndex] = right[rightIndex];
      tempArray[tempIndex].class = "bar-swap";
      rightIndex++;
      tempIndex++;
    }
  }

  function mergeSortHelper(start, end) {
    if (start < end) {
      const middle = Math.floor((start + end) / 2);
      mergeSortHelper(start, middle);
      mergeSortHelper(middle + 1, end);
      merge(start, middle, end);
      steps.push(JSON.parse(JSON.stringify(tempArray)));
    }
  }

  mergeSortHelper(0, tempArray.length - 1);
  tempArray.forEach((element) => {
    element.class = "bar-sorted";
  });
  steps.push(JSON.parse(JSON.stringify(tempArray)));
  return steps;
}

export default mergeSort;
