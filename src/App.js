import ExpenseItem from "./components/ExpenseItem";

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
      date: new Date(2023, 11, 4)
    },
  ];

  return (
    <>
      <ExpenseItem title={expenses[0].title} amount={expenses[0].amount} date={expenses[0].date}></ExpenseItem>
      <ExpenseItem title={expenses[1].title} amount={expenses[1].amount} date={expenses[1].date}></ExpenseItem>
      <ExpenseItem title={expenses[2].title} amount={expenses[2].amount} date={expenses[2].date}></ExpenseItem>
      <ExpenseItem title={expenses[3].title} amount={expenses[3].amount} date={expenses[3].date}></ExpenseItem>
    </>
  );
}

export default App;
