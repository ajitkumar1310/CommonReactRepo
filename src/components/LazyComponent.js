import React, { Suspense } from 'react';

const OtherComponent=React.lazy(()=>import('./OtherComponent'));

const LazyComponent=()=>{
  return(
    <Suspense fallback={<div>loading...</div>}>
      <OtherComponent />
    </Suspense>
  )
}

export default LazyComponent