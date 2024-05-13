/* cSpell: disable */
import { useState } from 'react'

function MyButton({count, onClick}) {
    /* state variable, current state and function to increment */

    return (
        <div>
            <button onClick={onClick}>Increment {count}</button>
        </div>
    );
}
function PedrezuelaFamilyList() {
    const pedrezuelaFamily = [
        {name: 'Jerome Pedrezuela'},
        {name: 'John Pedrezuela'}
    ];
    const pedrezuelaList = pedrezuelaFamily.map((pedrezuela, index) =>
        <li key={index}>{pedrezuela.name}</li>
    );
    return (
        <ul>{pedrezuelaList}</ul>
    );
}
function TargaryenFamilyList() {
    const targaryenFamily = [
        {name: 'Rhaella Targaryen'},
        {name: 'Rhaegar Targaryen'}
    ];
    const targaryenFamilyList = targaryenFamily.map((targaryen, index) =>
        <li key={index}>{targaryen.name}</li>
    );
    return (
        <div>
            <h3>The Targaryen</h3>
            <ul>{targaryenFamilyList}</ul>
        </div>
    );
}

export default function App() {
    const name = { firstName: 'Adrian', age: 22 };
    const {firstName, age} = name;
    const [count, setCount] = useState(0);

    function incrementCount() {
        setCount(count + 1);
    }
    function decrementCount() {
        setCount(count - 1);
    }

    return (
        <div>
            <div className="title">Hello, my name is {firstName} and I'm {age} years old.</div>
            <PedrezuelaFamilyList />
            <TargaryenFamilyList />
            <h1>Counter: {count}</h1>
            <MyButton count={count} onClick={incrementCount} />
        </div>
    );
}
