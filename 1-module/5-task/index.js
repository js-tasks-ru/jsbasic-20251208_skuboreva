function truncate(str, maxlength) {
  if (!str) {
    return str;
  }

  if (str.length > maxlength) {
    return str.slice(0, maxlength - 1) + "…";
  }

  return str;
}
