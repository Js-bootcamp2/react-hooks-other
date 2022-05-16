import React from 'react'

function ChildOne({
  toggle, 
}) {
  
  console.log('child one', toggle)
  
  return (
    <div>ChildOne</div>
  )
}

export const MemoizedChildOne = React.memo(ChildOne);