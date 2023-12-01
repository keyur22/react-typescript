type AgeProps = {
  children: string;
};

const Age = (props: AgeProps) => {
  return <div>{props.children}</div>;
};

export default Age;
