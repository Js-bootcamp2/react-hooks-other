import React, {forwardRef, useImperativeHandle, useRef} from 'react'

const ChildTwo = forwardRef((props, ref) => {
  console.log('child two')

  useImperativeHandle(ref, () => ({
    showAlert() {
      alert("getAlert from Child");
    },

    log() {
      console.log('show some text')
    }
  }));

  return (
    <div>Child Two</div>
  )
})

export default ChildTwo;



