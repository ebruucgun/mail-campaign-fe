
import './App.css';
import React from 'react';
import ContactsPage from './pages/ContactsPage';
import CampaignPage from './pages/CampaignPage';
import HomePage from './pages/HomePage';
import SendingMailPage from './pages/SendingMailPage';

import { HashRouter as Router, Route,  Switch} from 'react-router-dom';
import TopBar from './components/TopBar';

function App() {
  return (
    <div>
      <Router >
        <TopBar/>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="https://ebruucgun.github.io/mail-campaign-fe//contacts" component={ContactsPage} />
            <Route path="https://ebruucgun.github.io/mail-campaign-fe//campaign" component={CampaignPage} />
            <Route path="https://ebruucgun.github.io/mail-campaign-fe//sendingmail" component={SendingMailPage} />
        </Switch>
        </Router>
    </div>
  );
}

export default App;
