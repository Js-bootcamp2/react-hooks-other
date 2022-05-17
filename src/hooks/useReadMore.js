import { useState } from 'react'

export default function useReadMore(initState, comment) {
  const [more, setMore] = useState(initState);
  const [showButton, setShowButton] = useState(!!comment);

  const onReadMore = () => {
    setMore(!more);
  }

  return {
     more,
     onReadMore, 
     showButton
  }
}
