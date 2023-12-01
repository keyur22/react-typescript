type GreetProps = {
  name?: string;
};

const Greeting = (props: GreetProps) => {
  const {name = 'keyur'} = props;

  return <div>Welcome {name}</div>;
};

export default Greeting;
