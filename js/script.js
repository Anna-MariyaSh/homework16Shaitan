function rezult(x, y, r) {
  if(typeof(x) !== "number") return "error in firts arg";
  if(typeof(y) !== "number") return "error in second arg";
  if(typeof(r) !== "number") return "error in third arg";
  let z = Math.sqrt((x+x) +(y+y));
  return z < r? "Точка находиться в окружности": "Точка выходит за окружность";
}
alert(rezult(4, 9, 10));
