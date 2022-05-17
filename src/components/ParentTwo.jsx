import React, {useState, useEffect, useCallback, useRef} from 'react'
import { MemoizedChildOne } from './ChildOne';
import ChildTwo from './ChildTwo';

export default function Parent() {
  const [toggle, setToggle] = useState(false);
  const [value, setValue] = useState('');
  const toggler = useRef();
  const inputRef = useRef();

  const onSearch = () => {
    console.log('search', value)
  }

  const onSearchCB = useCallback(() => {
    console.log('calback search', value)
  }, [value, toggle])

  useEffect(() => {
    onSearchCB()
  }, [onSearchCB])

  console.log('toggler', toggler?.current)
  console.log('inputRef', inputRef?.current?.value)
  return (
    <div>
      <div ref={toggler} onClick={() => setToggle(!toggle)}>Parent TWO</div>
      <input ref={inputRef} type="text" value={value} onChange={(e) => setValue(e.target.value)} />

      {/* <MemoizedChildOne toggle={toggle} /> */}
      {/* <ChildTwo /> */}
    </div>
  )
}
