import React, { Suspense } from 'react'
const LazyLoading = React.lazy(() => import('./LazyLoading'));

const CodeSplitting = () => {
  return (
    <>
      <h2>Suspense</h2>
      <Suspense fallback={<h2>Enjoy the Suspense!!</h2>}>
        <LazyLoading />
      </Suspense>
    </>
  )
}

export default CodeSplitting