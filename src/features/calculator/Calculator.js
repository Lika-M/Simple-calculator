import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as actions from './calculatorSlice';

import './Calculator.css';

export function Calculator() {
    const [inputValue, setInputValue] = useState('');
    const number = useSelector(actions.selectCount);
    const dispatch = useDispatch();

    function onChange(ev) {
        if (isNaN(ev.target.value)) {
            return;
        }
        setInputValue(Number(ev.target.value));
    }
    
    function onButtonClick(ev) {
        if(inputValue === '' || inputValue === 0){
            return;
        }

        dispatch(actions[ev.target.name](inputValue));
        setInputValue('');
    }


    return (
        <section className="main">
            <h1>Simple calculator</h1>
            <article className="calculator-result">
                <span>Current value in the store: </span>
                <span>{number}</span>
            </article>
            <article className="calculator">
                <div className="calculator-content">
                    <input type="text"
                        placeholder="Enter a number"
                        onChange={onChange}
                        value={inputValue}
                    />
                </div>
                <div className="calculator-btn" onClick={onButtonClick}>
                    <button name="add" >+</button>
                    <button name="subtract">-</button>
                    <button name="multiply">*</button>
                    <button name="divide">/</button>
                </div>
            </article>

        </section>
    )
}