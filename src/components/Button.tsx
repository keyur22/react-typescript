type ButtonProps = {
  onClick: (event: React.MouseEvent<Element>, id: number) => void;
  label?: string;
};

const Button = (props: ButtonProps) => {
  const {onClick, label} = props;

  return <button onClick={(e) => onClick(e, 3)}>{label || 'Click Me'}</button>;
};

export default Button;
