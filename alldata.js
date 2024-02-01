function AllData() {
  const ctx = React.useContext(UserContext);
  return (
    <h1 className="allData">
      All Data
      <br />
      {JSON.stringify(ctx.users)}
    </h1>
  );
}

export default AllData;