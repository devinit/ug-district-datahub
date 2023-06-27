import React, { FC } from 'react';
import WagtailModalHeader from './WagtailModalHeader';

const WagtailModalContent: FC<{ title: string }> = ({ title, children }) => {
  return (
    <>
      <WagtailModalHeader>{title}</WagtailModalHeader>
      <div className="nice-padding">{children}</div>
    </>
  );
};

export default WagtailModalContent;
