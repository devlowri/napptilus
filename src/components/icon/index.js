import React from 'react';
import * as Iconset from './iconset';

const Icon = (props) => {
  const IconComponent = Iconset[props.icon];
  return (
    <React.Suspense>
      <IconComponent {...props} />
    </React.Suspense>
  );
};

export default Icon;
