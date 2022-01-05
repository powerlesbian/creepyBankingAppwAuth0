import React, {createContext} from "react";
import { Router, Route, Switch } from "react-router-dom";
import { Container } from "reactstrap";

import Loading from "./components/Loading";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Home from "./views/Home";
import Profile from "./views/Profile";
import ExternalApi from "./views/ExternalApi";
import { useAuth0 } from "@auth0/auth0-react";
import history from "./utils/history";
import Create from './components/createaccount05';
import LoginForm from './components/LoginForm';
import Deposit from './components/deposit02';
import Withdraw from './components/withdraw03';
import Balance from './components/balance';
// import AllData from './components/alldata02';
import RecordList from './components/alldata03-axios';
import Helpme from './components/help';
// styles
import "./App.css";

// fontawesome
import initFontAwesome from "./utils/initFontAwesome";
initFontAwesome();

export const UserContext = createContext(null);

function App() {
  const { isLoading, error } = useAuth0();

  if (error) {
    return <div>Oops... {error.message}</div>;
  }

  if (isLoading) {
    return <Loading />;
  }

  return (
    <Router history={history}>
      <div id="app" className="d-flex flex-column h-100">
        <NavBar />
        <UserContext.Provider value={{users:[{name:'ChineseHacker', email:'whatever@mit.edu', password:'secret', balance:100}]}}>
        <Container className="flex-grow-1 mt-5" style={{padding: "20px"}}>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/profile" component={Profile} />
            <Route path="/external-api" component={ExternalApi} />
            <Route path="/createaccount05/" component={Create} />
            <Route path="/LoginForm/" component={LoginForm} />
            <Route path="/balance/" component={Balance} />
            <Route path="/deposit02/" component={Deposit} />
            <Route path="/withdraw03/" component={Withdraw} />
            <Route path="/alldata03-axios/" component={RecordList} />
            <Route path="/help/" component={Helpme} />
          </Switch>
        </Container>
        </UserContext.Provider>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
