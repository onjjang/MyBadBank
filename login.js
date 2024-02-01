//import React, { useState, useContext } from 'react';
//import { isLoggedIn } from "./navbar.js";
//import { userName1 } from "./navbar.js";
// export const [isLoggedIn, setIsLoggedIn] = React.useState(true);
// const  isLoggedIn  = useContext(MyContext);
//import { updateLoggedIn } from './navbar.js';

// const App = () => {
//   // const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [isLoggedIn, setIsLoggedIn] = React.useState(false);
//console.log(userName1);
//const userName = userName1;
  
//   // 다른 파일에서 상태 변수를 사용할 수 있도록 컨텍스트를 생성합니다.
//   // const MyContext = createContext(isLoggedIn);

//   return (
//     <MyContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
  
// </MyContext.Provider>
//   );
// };
updateLoggedIn(20);

function Login() {
  const [show, setShow] = React.useState(true);
  const [status, setStatus] = React.useState("");
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const ctx = React.useContext(UserContext);
  //const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  // Function to fetch and compare user credentials
  async function handleLogin() {
    const user = ctx.users.find(
      (user) => user.name === name && user.password === password
    );
    console.log(user.name);
    if (user) {
        //setStatus("Login successful!" + JSON.stringify(user.name)+user.name);
        setStatus("Login successful! User: " + user.name);
        // console.log(name);
         // Redirect to the appropriate page or perform other actions after successful login
        //isLoggedIn(true);
         //isLoggedIn(setIsLoggedIn); 
         //const userName=user.name;
        setShow(false);
        //updateLoggedIn(true);
        //console.log("updateLoggedIn:",isLoggedIn);
       //const userName1 = userName;
        //console.log("isLoggedIn:",isLoggedIn);
      function LoginTo(){
        //NavBar.MyContext = true;
        //console.log(isLoggedIn);
        
        //isLoggedIn=true;
        //console.log(userName);
        //console.log("userName1",userName1);
        //console.log(isLoggedIn);
      };
    } else {
      setStatus("Invalid email or password");
    }
  }       


  function validate(field, label) {
    if (!field) {
      setStatus("Error: " + label);
      setTimeout(() => setStatus(""), 3000);
      return false;
    }
    return true;
  }

  // function handleCreate() {
  //   console.log(name, email, password);
  //   if (!validate(name, "name")) return;
  //   if (!validate(email, "email")) return;
  //   if (!validate(password, "password")) return;
  //   ctx.users.push({ name, email, password, balance: 100 });
  //   setShow(false);
  // }

  function clearForm() {
    setName("");
    setEmail("");
    setPassword("");
    setShow(true);
  }

  return (
    <Card
      bgcolor="primary"
      txtcolor="white"
      header="Login Account"
      status={status}
      body={
        show ? (
          <>
            Name
            <br />
            <input
              type="input"
              className="form-control"
              id="name"
              placeholder="Enter name"
              value={name}
              onChange={(e) => setName(e.currentTarget.value)}
            />
            <br />
            {/* Email address
            <br /> */}
            {/* <input
              type="input"
              className="form-control"
              id="email"
              placeholder="Enter Email"
              value={email}
              onChange={(e) => setEmail(e.currentTarget.value)}
            />
            <br /> */}
            Password
            <br />
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.currentTarget.value)}
            />
            <br />
            <button
              type="submit"
              className="btn btn-light"
              onClick={handleLogin}
            >
              Login Account
            </button>
          </>
        ) : (
          <>
            <h5>Success</h5>
            <button type="submit" className="btn btn-light" onClick={clearForm}>
              Logout
            </button>
          </>
        )
      }
    />
  );
}

//export {userName};
export default Login;