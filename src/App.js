import Expenses from "./components/Expenses/Expenses";
import React from 'react';

function App() {
  const expenses = [
    {
      id: 'e1',
      title: 'Car Insurance',
      amount: 25000,
      date: new Date(2023, 0, 1)
    },
    {
      id: 'e2',
      title: 'Grocery',
      amount: 30000,
      date: new Date(2023, 1, 2)
    },
    {
      id: 'e3',
      title: 'Healthcare',
      amount: 15000,
      date: new Date(2023, 2, 3)
    },
    {
      id: 'e4',
      title: 'Education',
      amount: 50000,
      date: new Date(2020, 3, 26)
    },
  ];

  // Trying to implement the RETURN section using React.createElement()

  // return React.createElement('div', {}, React.createElement(Expenses, { items: expenses }));

  return (
    <>
      <Expenses items={expenses}/>
    </>
  );
}

export default App;
