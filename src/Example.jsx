import React, { memo } from 'react'

const Example = ({data, func}) => {
    console.log('Component Re-render!');
  return (
    <>
    <h2>Example Component: {data} </h2>
    </>
  )
}

export default memo(Example)