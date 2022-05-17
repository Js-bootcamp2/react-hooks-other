import React, {useState, useEffect, useCallback, useRef} from 'react'
import ChildTwo from './ChildTwo';

export default function Parent() {
  const childRef = useRef();

  const onClick = () => {
    childRef.current.showAlert();
  };

  const handleButton = () => {
    childRef.current.log();
  }

  return (
    <div>
      <div onClick={onClick}>Parent Three</div>
      <ChildTwo ref={childRef} />
      <button onClick={handleButton}>Console</button>
    </div>
  )
}
