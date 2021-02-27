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

function Counter(props: CounterPropsType) {

    return (
        <div className={'counter'}>
            <Display value={props.value}/>
            <div className={'buttons'}>
                <Button
                    title={'inc'}
                    classname={'ins'}
                    value={props.value}
                    onClickHandler={props.increment}
                    disable={props.value === 5}
                />
                <Button
                    title={'reset'}
                    classname={'reset'}
                    value={props.value}
                    onClickHandler={props.reset}
                    disable={props.value === 0}
                />
            </div>


        </div>
    );
}

export default Counter;
