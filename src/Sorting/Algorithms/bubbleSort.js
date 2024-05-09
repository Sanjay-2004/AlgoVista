const bubbleSort = (arr) => {
  let ans = [];
  const tempArray = arr.slice();

  for (let i = 0; i < tempArray.length; i++) {
    let j = 0;
    for (; j < tempArray.length - i - 1; j++) {
      tempArray[j].class = "bar-compare";
      tempArray[j + 1].class = "bar-compare";
      if (tempArray[j].value > tempArray[j + 1].value) {
        // tempArray[j].class = "bar-compare";
        tempArray[j + 1].class = "bar-compare";
        ans.push(JSON.parse(JSON.stringify(tempArray)));
        let temp = tempArray[j];
        tempArray[j] = tempArray[j + 1];
        tempArray[j + 1] = temp;
        tempArray[j].class = "bar-swap";
        ans.push(JSON.parse(JSON.stringify(tempArray)));
      } else {
        tempArray[j].class = "bar-compare";
        tempArray[j + 1].class = "bar-compare";
        ans.push(JSON.parse(JSON.stringify(tempArray)));
        tempArray[j].class = "bar-swap";
        // tempArray[j + 1].class = "bar-swap";
        ans.push(JSON.parse(JSON.stringify(tempArray)));
      }
    }
    tempArray[j].class = "bar-sorted";
    ans.push(JSON.parse(JSON.stringify(tempArray)));
  }

  tempArray.forEach((element) => {
    element.class = "bar-sorted";
  });
  ans.push(JSON.parse(JSON.stringify(tempArray)));

  return ans;
};

export default bubbleSort;

// let arr = [
//   { value: 3, class: "bar", id: "id-0" },
//   { value: 2, class: "bar", id: "id-1" },
//   { value: 1, class: "bar", id: "id-2" },
// ];

// console.log(bubbleSort(arr));
