import React from 'react';
import * as Iconset from './iconset';

const Icon = ({ icon }) => {
  const IconComponent = Iconset[icon];
  return (
    <React.Suspense>
      <IconComponent />
    </React.Suspense>
  );
};

export default Icon;
