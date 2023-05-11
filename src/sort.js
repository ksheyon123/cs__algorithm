const bubbleSort = (rnds)=> {
  let iteration = 0;

  for (let i = 0; i <rnds.length; i++) {
    for (let j = i + 1; j < rnds.length; j++) {
      if(rnds[i] > rnds[j]) {
        const temp = rnds[j];
        rnds[j] = rnds[i];
        rnds[i] = temp;
        iteration++;
      }
    }
  }
  console.log("bubble Sort ",rnds, iteration);
}

const insertionSort = (arr) => {
  let iteration = 0;
  for (let i = 1; i < arr.length; i++) {
    let j = i - 1;
    const temp = arr[i];
    while (j >= 0 && arr[j] > temp) {
      arr[j + 1] = arr[j];
      j--;
    }
    iteration++;
    arr[j + 1] = temp;
  }
  console.log("insertion Sort ",arr, iteration);
}

const rnds = [1, 5, 6, 2, 4, 3];

bubbleSort(rnds);
insertionSort(rnds);