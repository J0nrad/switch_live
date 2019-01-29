import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import SwitchEdit from './switchs/SwitchEdit';
import SwitchDelete from './switchs/SwitchDelete';
import SwitchCreate from './switchs/SwitchCreate';
import SwitchShow from './switchs/SwitchShow';
import SwitchList from './switchs/SwitchList';
import Header from './header'

const App = () => {
  return (
    <div className="ui container">
      <BrowserRouter>
        <div>
          < Header />
          <Route path="/" exact component={SwitchList} />
          <Route path="/switchs/new" component={SwitchCreate} />
          <Route path="/switchs/edit" component={SwitchEdit} />
          <Route path="/switchs/delete" component={SwitchDelete} />
          <Route path="/switchs/show" component={SwitchShow} />
        </div>
      </BrowserRouter>
    </div>
  )
};

export default App;
//We must use Link element to navigate the website
//This is why they call it a single page application because we are only using one HTML
//It is a way of tricking the user to seem like it is a mulitple page app

//We are going to use OAuth2 by google.
//email scope through https://developers.google.com/identity/protocols/googlescopes
//Easy way to get access to users information and having an UserAuth.
