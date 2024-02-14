import ChildC from './ChildC'
import React from 'react';

export default  function ChildB({name}){
    return (
        <ChildC name={name}/>
    );
}