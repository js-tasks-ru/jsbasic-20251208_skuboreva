function factorial(n) {
  if (typeof n !== "number") {
    throw new Error("n должно быть числом");
  }

  if (!Number.isFinite(n)) {
    throw new Error("n должно быть конечным числом");
  }

  if (!Number.isInteger(n)) {
    throw new Error("n должно быть целым числом");
  }

  if (n < 0) {
    throw new Error("n должно быть неотрицательным");
  }

  if (n === 0 || n === 1) {
    return 1;
  }

  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}
