import React from 'react';
import { useState } from 'react';
import "./style.css";

const App = () => {
    const [count, setNum] = useState(0);

    return (
        <div className='box'>
            <div className="main">
                <h2>Counter</h2>
                <p className="counter-value">{count}</p>
            </div>
            <div className="button">
                <button className='btns' id='btn-child1' onClick={() => setNum(count + 1)}>
                    Increase
                </button>
                <button className='btns' id='btn-child2' onClick={() => setNum(0)}>
                    Reset
                </button>
                <button className='btns' id='btn-child3' onClick={() => setNum(count - 1)}>
                    Decrease
                </button>
            </div>
        </div>
    );
};

export default App;