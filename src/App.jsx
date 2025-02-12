import { mockBudgets } from "./api.js";
import './App.css'

function App() {
    return (
        <div>
            <h1>Budgets</h1>
            <ul>
                {mockBudgets.map((budget) => (
                    <li key={budget.id}>
                        {budget.name}: ${budget.amount}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default App