//import React from 'react';
//import UserProvider from './UserContext';
//import Login from './Login';
//import NavBar from './NavBar';
const UserContext = React.createContext();
function Spa() {
  return (
    <HashRouter>
      <h1>Welcome to the bad bank</h1>
      <NavBar />
      <UserContext.Provider
        value={{
          users: [
            {
              name: "abel",
              email: "abel@mit.edu",
              password: "secret",
              balance: 100,
            },
            {
              name: "test",
              email: "test@mit.edu",
              password: "1234",
              balance: 100,
            },
            {
              name: "test2",
              email: "test3@mit.edu",
              password: "1234",
              balance: 100,
            },
          ],
        }}
      >
        <div className="container" style={{ padding: "20px" }}></div>
        <Route path="/" exact component={Home} />
        <Route path="/CreateAccount" component={CreateAccount} />
        <Route path="/login" component={Login} />
        <Route path="/Deposit" component={Deposit} />
        <Route path="/Withdraw" component={Withdraw} />
        <Route path="/Balance" component={Balance} />
        <Route path="/alldata" component={AllData} />
      </UserContext.Provider>
    </HashRouter>
  );
}

ReactDOM.render(<Spa />, document.getElementById("root"));


