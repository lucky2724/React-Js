import React from 'react'

const Child = ({count1}) => {
  return (
    <div>Child -{count1}</div>
  )
}

export default React.memo(Child)