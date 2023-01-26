function powersOfTwo(n){
  var arr = [];
  for (let i = 0; i <= n; i++) {
    arr.push(Math.pow(2, i));
  }
  return arr;
}

function powersOfTwo(n) {
  return [...Array(n + 1)].map((_, i) => 2 ** i)
}

powersOfTwo = n => [...Array(n + 1)].map((e, i) => Math.pow(2, i));
