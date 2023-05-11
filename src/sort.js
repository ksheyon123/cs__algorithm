const bubbleSort = (rnds)=> {

  for (let i = 0; i <rnds.length; i++) {
    for (let j = i + 1; j < rnds.length; j++) {
      if(rnds[i] > rnds[j]) {
        const temp = rnds[j];
        rnds[j] = rnds[i];
        rnds[i] = temp;
      }
    }
  }
  console.log(rnds);
}

const rnds = [2, 1, 5, 4, 3, 6, 7, 10, 9, 8, 8];

bubbleSort(rnds);