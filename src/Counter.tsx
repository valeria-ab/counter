import React, {useState} from 'react';
import logo from '../logo.svg';
import './App.css';
import Button from './Button';
import Display from './Display';


type CounterPropsType = {
    value: number
    increment: () => void
    reset: () => void
    maxValue: number;
    error: string
}

function Counter(props: CounterPropsType) {

    return (
        <div className={'counter'}>
            <Display value={props.value} maxValue={props.maxValue} error={props.error}/>
            <div className={'buttons'}>
                <Button
                    title={'inc'}
                    value={props.value}
                    onClickHandler={props.increment}
                    disabled={props.value === props.maxValue}
                />
                <Button
                    title={'reset'}
                    value={props.value}
                    onClickHandler={props.reset}
                    disabled={props.value === 0}
                />
            </div>


        </div>
    );
}

export default Counter;
