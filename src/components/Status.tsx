type StatusProps = {
  status: 'loading' | 'success' | 'error';
};

const Status = (props: StatusProps) => {
  if (props.status === 'success') {
    return <div>Success</div>;
  }
  if (props.status === 'error') {
    return <div>Error</div>;
  }
  return <div>...Loading</div>;
};

export default Status;
