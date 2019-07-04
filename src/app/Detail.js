import React, { Suspense } from 'react';

const GifDetail = React.lazy(() => import('./GifDetail'));

const Detail = (props) => {
  return (
  <div>
    <Suspense fallback={<div>Loading...</div>}>
      <GifDetail pk={props.match.params.pk} />
    </Suspense>
  </div>
)};

export default Detail;
