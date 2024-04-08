const Details = props => {
  const { status, premiered, network } = props;

  return (
    // <DetailsWrapper>
    <div>
      <p>Status: {status}</p>
      <p>
        Premiered {premiered} {!!network && `on ${network.name}`}
      </p>
    </div>

    // </DetailsWrapper>
  );
};

export default Details;
