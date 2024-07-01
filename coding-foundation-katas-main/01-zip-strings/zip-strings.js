function zipStrings(strA, strB) {
  let result = "";

  let arrA = strA.split("");
  let arrB = strB.split("");

  console.log(strA, strB);

  for (let i = 0; i < arrA.length || i < arrB.length; i++) {
    if (i < arrA.length) {
      result += arrA[i];
    }

    if (i < arrB.length) {
      result += arrB[i];
    }
    console.log(arrA, arrB);
  }
  return result;
}
