import React, {useState} from 'react';
import logo from '../logo.svg';
import './App.css';
import Button from './Button';
import Display from './Display';


type CounterPropsType = {
    value: number
    increment: () => void
    reset: () => void
}

function CounterWithValue(props: CounterPropsType) {

    return (
        <div className={'counter'}>

                <div className={"display-counter-with-value"}>
                    <div className={"display-counter-items"}>
                        <span>max value:</span>
                        <input type="text"/>

                    </div>
                    <div className={"display-counter-items"}>
                        <span>start value:</span>

                        <input type="text"/>
                    </div>


            </div>
            <div className={'buttons'}>
                <Button
                    title={'set'}

                    value={props.value}
                    onClickHandler={props.increment}
                    disable={props.value === 5}
                />

            </div>


        </div>
    );
}

export default CounterWithValue;
