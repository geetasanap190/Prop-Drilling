import ChildB from './ChildB'
import React from 'react';

export default  function ChildA({name}){
    return (
        <ChildB name={name}/>
    );
}