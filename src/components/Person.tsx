type PersonProps = {
  name: {
    first: string;
    last: string;
  }[];
};

const Person = (props: PersonProps) => {
  return (
    <div>
      {props.name.map((x) => (
        <div>
          {x.first} {x.last}
        </div>
      ))}
    </div>
  );
};

export default Person;
