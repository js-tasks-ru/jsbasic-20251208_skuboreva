function sumSalary(salaries) {
  let sum = 0;

  for (const value of Object.values(salaries)) {
    if (isFinite(value)) {
      sum += value;
    }
  }

  return sum;
}
