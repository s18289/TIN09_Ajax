'use strict';

//POSTMAN POST METHOD
/*
{
    "number1" : 1,
    "operator" : "+",
    "number2" : 2
}
*/

const express = require('express');
const { check, validationResult } = require('express-validator');
const PORT = 3000;

const app = express();
app.use(express.json());

app.post(
  '/9a',
  [check('number1').isNumeric(), check('number2').isNumeric()],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.json({ errors: errors.array() });
    }

    const number1 = parseInt(req.body.number1);
    const number2 = parseInt(req.body.number2);
    const op = req.body.operator;
    let result = 0;

    switch (op) {
      case '+':
        result = number1 + number2;
        break;
      case '-':
        result = number1 - number2;
        break;
      case '*':
        result = number1 * number2;
        break;
      case '/':
        console.log(number2);
        if (number2 === 0) {
          result = 'Division by 0 is not allowed';
          break;
        }
        result = number1 / number2;
        break;
      default:
        result = 'Please enter a valid operator';
    }
    res.json({ result: result });
  }
);
app.listen(PORT);
