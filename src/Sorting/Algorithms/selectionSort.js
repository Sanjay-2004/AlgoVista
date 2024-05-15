function selectionSort(arr) {
  let steps = [];
  const tempArray = arr.slice();
  steps.push(JSON.parse(JSON.stringify(tempArray)));
  for (let i = 0; i < tempArray.length - 1; i++) {
    tempArray[i].class = "bar-compare";
    steps.push(JSON.parse(JSON.stringify(tempArray)));
    let minind = i;
    for (let j = i + 1; j < tempArray.length; j++) {
      if (tempArray[j].value < tempArray[minind].value) {
        minind = j;
      }
    }
    tempArray[minind].class = "bar-compare";
    steps.push(JSON.parse(JSON.stringify(tempArray)));
    let temp = tempArray[i];
    tempArray[i] = tempArray[minind];
    tempArray[minind] = temp;
    tempArray[minind].class = "bar-swap";
    tempArray[i].class = "bar-sorted";
    steps.push(JSON.parse(JSON.stringify(tempArray)));
  }
  tempArray.forEach((element) => {
    element.class = "bar-sorted";
  });
  steps.push(JSON.parse(JSON.stringify(tempArray)));
  return steps;
}

export default selectionSort;
