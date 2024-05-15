function insertionSort(arr) {
  let steps = [];
  const tempArray = arr.slice();
  tempArray[0].class = "bar-swap";
  steps.push(JSON.parse(JSON.stringify(tempArray)));

  for (let i = 1; i < tempArray.length; i++) {
    // let curr = tempArray[i];
    tempArray[i].class = "bar-compare";
    steps.push(JSON.parse(JSON.stringify(tempArray)));
    let j = i - 1;
    while (j >= 0 && tempArray[j].value > tempArray[j + 1].value) {
      let k = tempArray[j + 1];
      tempArray[j + 1] = tempArray[j];
      tempArray[j] = k;
      tempArray[j + 1].class = "bar-swap";
      tempArray[j].class = "bar-compare";
      steps.push(JSON.parse(JSON.stringify(tempArray)));
      j--;
    }
    tempArray[j + 1].class = "bar-swap";
    steps.push(JSON.parse(JSON.stringify(tempArray)));
  }

  tempArray.forEach((element) => {
    element.class = "bar-sorted";
  });
  steps.push(JSON.parse(JSON.stringify(tempArray)));
  return steps;
}

export default insertionSort;

// let arr = [
//   { value: 3, class: "bar" },
//   { value: 1, class: "bar" },
//   { value: 2, class: "bar" },
//   { value: 4, class: "bar" },
//   { value: 5, class: "bar" },
// ];
// let steps = insertionSort(arr);
// console.log(steps);
