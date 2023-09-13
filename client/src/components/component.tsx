import React from 'react';

interface ComponentProps {
    name: string;
    age: number
  }

const Component = ({ name ,age}: ComponentProps) =>{
    return <div>{name},{age}</div>
}

export default Component