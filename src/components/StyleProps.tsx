type StylePropsProps = {
  styles: React.CSSProperties;
};

const StyleProps = (props: StylePropsProps) => {
  return <div style={props.styles}>StyleProps</div>;
};

export default StyleProps;
