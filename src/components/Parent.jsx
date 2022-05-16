import React, {useState, useMemo} from 'react'
import { MemoizedChildOne } from './ChildOne';
import ChildTwo from './ChildTwo';

function factorialOf(n) {
  console.log('factorialOf(n) called!');
  return n <= 0 ? 1 : n * factorialOf(n - 1);
}

export default function Parent() {
  const [toggle, setToggle] = useState(false);
  const [value, setValue] = useState('');
  const [number, setNumber] = useState(1);
  console.log('parent')
  const factorial = useMemo(() => {
    return factorialOf(number)
  }, [number]);
  
  return (
    <div>
      <div onClick={() => setToggle(!toggle)}>Parent</div>
      <input type="text" value={value} onChange={(e) => setValue(e.target.value)} />
      <input type="number" value={number} onChange={(e) => setNumber(e.target.value)} />
      is {factorial}

      <MemoizedChildOne toggle={toggle} />
      <ChildTwo />
    </div>
  )
}
