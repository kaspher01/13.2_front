import React from 'react';
import { useParams } from 'react-router-dom';
import useQuery from '../hooks/useQuery';

const CalculatorOperation = () => {
  const { operation } = useParams();
  let query = useQuery();
  let x = query.get('x');
  let y = query.get('y');
  const calculate = (a, b, operation) => {
    const numA = parseFloat(a);
    const numB = parseFloat(b);

    if (isNaN(numA) || isNaN(numB)) {
      return 'Invalid input |' + x + ' | ' + y + ' | ' + query;
    }

    switch (operation) {
      case 'add':
        return numA + numB;
      case 'sub':
        return numA - numB;
      case 'mul':
        return numA * numB;
      case 'div':
        return numB !== 0 ? numA / numB : 'Cannot divide by zero';
      default:
        return 'Invalid operation';
    }
  };

  const result = calculate(x, y, operation);

  return (
    <div>
      <h2>Result: {result}</h2>
    </div>
  );
};

export default CalculatorOperation;
