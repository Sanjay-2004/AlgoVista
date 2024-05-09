function quickSort(arr) {
  let ans = [];
  const tempArray = arr.slice();

  function partition(arr, left, right) {
    let pivot = arr[right];
    tempArray[right].class = "bar-compare";
    ans.push(JSON.parse(JSON.stringify(arr)));
    let i = left - 1;
    for (let j = left; j < right; j++) {
      //   tempArray[j].class = "bar-compare";
      //   ans.push(JSON.parse(JSON.stringify(arr)));
      if (arr[j].value < pivot.value) {
        i++;
        // tempArray[i].class = "bar-compare";
        // tempArray[j].class = "bar-compare";
        // ans.push(JSON.parse(JSON.stringify(arr)));
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
        tempArray[i].class = "bar-swap";
        tempArray[j].class = "bar-swap";
        ans.push(JSON.parse(JSON.stringify(arr)));
      } else {
        tempArray[j].class = "bar-swap";
        ans.push(JSON.parse(JSON.stringify(arr)));
      }
    }
    let temp = arr[i + 1];
    arr[i + 1] = arr[right];
    arr[right] = temp;
    tempArray[i + 1].class = "bar-sorted";
    tempArray[right].class = "bar-swap";
    ans.push(JSON.parse(JSON.stringify(arr)));
    ans.push(JSON.parse(JSON.stringify(arr)));

    return i + 1;
  }

  function quickSortHelper(arr, left, right) {
    if (left < right) {
      let pivot = partition(arr, left, right);
      quickSortHelper(arr, left, pivot - 1);
      quickSortHelper(arr, pivot + 1, right);
      ans.push(JSON.parse(JSON.stringify(arr)));
    }
  }

  quickSortHelper(tempArray, 0, tempArray.length - 1);
  tempArray.forEach((element) => {
    element.class = "bar-sorted";
  });
  ans.push(JSON.parse(JSON.stringify(tempArray)));
  return ans;
}

// let arr = [
//   { value: 3, class: "bar" },
//   { value: 1, class: "bar" },
//   { value: 2, class: "bar" },
//   { value: 4, class: "bar" },
//   { value: 5, class: "bar" },
// ];
// let steps = quickSort(arr);
// console.log(steps);

export default quickSort;
