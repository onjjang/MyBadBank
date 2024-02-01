//import Login from "./login";

const isLoggedIn = "";
//isLoggedIn = !setShow;
function NavBar() {
  // const { isLoggedIn, setIsLoggedIn } = useContext(UserContext); // Access isLoggedIn state from context
   //const [isLoggedIn, setIsLoggedIn] = React.useState(false);
 // const isLoggedIn=true;

  
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">
          MyBadBank
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" 
        id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a className="nav-link active" href="#/CreateAccount/">
              Create Account <span className="sr-only">(current)</span>
            </a>
            <a className="nav-link" href="#/login/">
              Login
            </a>
            <a
              className={isLoggedIn ? "nav-link" : "nav-link disabled"}
              href="#/deposit/"
            >
              Deposit
            </a>
            <a
              className={!isLoggedIn ? "nav-link" : "nav-link disabled"}
              href="#/withdraw/"
            >
              Withdraw
            </a>
            <a
              className={!isLoggedIn ? "nav-link" : "nav-link disabled"}
              href="#/balance/"
            >
              Balance
            </a>
            <a className="nav-link" href="#/alldata/">
              AllData
            </a>
            <a
              className="nav-link disabled"
              href="#"
              tabIndex="-1"
              aria-disabled="true"
            >
              <p>로그인 상태: {isLoggedIn}</p>
             {/* Disabled */}
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
