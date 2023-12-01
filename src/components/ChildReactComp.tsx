import React from 'react';

type ChildReactCompProps = {
  children: React.ReactNode;
};

const ChildReactComp = (props: ChildReactCompProps) => {
  return <div>{props.children}</div>;
};

export default ChildReactComp;
