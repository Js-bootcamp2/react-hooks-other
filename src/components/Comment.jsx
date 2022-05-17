import React, {useState} from 'react'
import useReadMore from '../hooks/useReadMore';

function Comment({comment}) {
  const { more, onReadMore, showButton } = useReadMore(false, comment);

  const sentence = comment.split('.')[0];

  const resultText = more ? comment : sentence;
  const moreText = more ? 'Show less' : 'Read more'

  return (
    <div>
      <div>{resultText}</div>
      {showButton && <button onClick={onReadMore}>{moreText}</button>}
    </div>
  )
}

export default Comment