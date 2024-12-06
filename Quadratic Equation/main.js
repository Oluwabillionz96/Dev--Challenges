function checkType(a) {
  return typeof a === "number";
}

function solve(a, b, c) {
  if (checkType(a) && checkType(b) && checkType(c)) {
    const discriminant = b ** 2 - 4 * a * c;
    if (discriminant > 0) {
      const squares = Number(Math.sqrt(discriminant).toFixed(2));

      const add = Number(((-b + squares) / (2 * a)).toFixed(2));
      const subtract = Number(((-b - squares) / (2 * a)).toFixed(2));

      return `X = ${add} or ${subtract}`;
    } else if (discriminant === 0) {
      const answer = Number((-b / (2 * a)).toFixed(2));
      return `X = ${answer}`;
    } else {
      return "There is No Logical Solution to this Equation(Discriminant is negative)";
    }
  } else {
    return "All inputs must be Numbers";
  }
}
