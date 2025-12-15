/**
 * Эту функцию трогать не нужно
 */
function print(text) {
  console.log(text);
}

/**
 * Эту функцию нужно поменять так,
 * чтобы функция sayHello работала корректно
 */
function isValid(name) {
  if (typeof name !== "string") {
    return false;
  }

  const trimmedName = name.trim();

  if (trimmedName === "") {
    return false;
  }

  if (/\s/.test(trimmedName)) {
    return false;
  }

  if (trimmedName.length < 4) {
    return false;
  }

  return true;
}

function sayHello() {
  let userName = prompt("Введите ваше имя");

  if (isValid(userName)) {
    print(`Welcome back, ${userName}!`);
  } else {
    print("Некорректное имя");
  }
}
