function checkSpam(str) {
  if (!str) {
    return false;
  }
  let upperStr = str.toUpperCase();

  return upperStr.includes("1XBET") || upperStr.includes("XXX");
}
