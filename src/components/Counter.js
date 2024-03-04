import { useState } from 'react';

const Counter = ({ label, theme }) => {
    const className = `counter-wrapper ${theme}`;
    const [count, setCount] = useState(0);

    const handleDecrease = () => {
        setCount(count - 1);
        setCount(count - 1);
        setCount(count - 1);
        setCount(count - 1);
        setCount(count - 1);
    };

    const handleIncrease = () => {
        // setCount(count + 1);
        // console.log('A');
        // setCount(count + 1);
        // console.log('A');
        // setCount(count + 1);
        // console.log('A');
        // setCount(count + 1);
        // console.log('A');
        // setCount(count + 1);
        // console.log('A');

        setCount((prevState) => {
            return prevState + 1;
        });
        setCount((prevCount) => {
            return prevCount + 1;
        });
        setCount((prevState) => {
            return prevState + 1;
        });
        setCount((prevState) => {
            return prevState + 1;
        });
        setCount((prevState) => {
            return prevState + 1;
        });
    };

    const handleUpdate = (e) => {
        const val = Number(e.target.value || 0);
        setCount(val);
    }

    return (
        <div className={className}>
            <h1>Counter {label}</h1>
            <div>
                <button onClick={handleDecrease}>-</button>  { /* In JS: onclick="handleDecrease()" */}
                {count}
                <input type="number" placeholder='New Value' value={count} onChange={handleUpdate}/>
                <button  onClick={handleIncrease}>+</button>
            </div>
        </div>
    )
}



export default Counter;