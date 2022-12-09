import { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import ContactForm from "../pages/ContactForm";
import Home from "../pages/Home";
import UpdateForm from "../pages/UpdateForm";
import UserForm from "../pages/UserForm";

function Routes() {
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("@KenzieHub:token"));

    if (token) {
      return setAuthenticated(true);
    }
  }, [authenticated]);

  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/userform">
        <UserForm />
      </Route>
      <Route path="/contactform">
        <ContactForm />
      </Route>
      <Route path="/updateform">
        <UpdateForm />
      </Route>
    </Switch>
  );
}

export default Routes;
