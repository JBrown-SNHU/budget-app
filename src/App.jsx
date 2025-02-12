import { useState, useEffect } from "react";
import './App.css'

function App() {
    const [expenses, setExpenses] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8080/api/expenses")
            .then((response) => response.json())
            .then((data) => setExpenses(data))
            .catch((error) => console.error("Error fetching expenses:", error));
    }, []);

    return (
        <div>
            <h1>Your Expenses</h1>
            <ul>
                {expenses.map((expense, index) => (
                    <li key={index}>
                        <strong>{expense.expName}</strong>: ${expense.amount / expense.maxCycle * expense.currCycle} out
                        of ${expense.amount}
                        <br />
                        Week: {expense.currCycle} of {expense.maxCycle}
                        <br />
                        Due Date: {expense.dueDate}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default App