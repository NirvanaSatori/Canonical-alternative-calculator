exports.calculate = function (expression) {
  let num = 0;
  let tokens = expression.split(" ").reverse();

  while (num < tokens.length) {
    let operator = tokens[num];

    if (
      operator === "+" ||
      operator === "-" ||
      operator === "*" ||
      operator === "/"
    ) {
      let currentIndex = tokens.findIndex((element) => element === operator);

      if (operator === "-") {
        tokens.splice(
          currentIndex - 2,
          3,
          eval(
            `${tokens[currentIndex - 1]} ${operator} ${
              tokens[currentIndex - 2]
            }`
          )
        );
      } else {
        tokens.splice(
          currentIndex - 2,
          3,
          eval(
            `${tokens[currentIndex - 2]} ${operator} ${
              tokens[currentIndex - 1]
            }`
          )
        );
      }

      num = currentIndex - 2;
    }
    num++;
  }

  return tokens[0];
};

console.log(calculate())
