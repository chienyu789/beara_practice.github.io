import React from 'react';
import { Route} from 'react-router-dom';

import HomePage from './pages/homepage/homepage.components';
import ShopPage from './pages/shoppage/shoppage.components';
import LondonStore from './pages/london-storepage/london-storepage.component';
import ShanghaiStore from './pages/shanghai-storepage/shanghai-storepage.component';

import Header from './components/header/header.components';
import Footer from './components/footer/footer.components';

import './App.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <Route exact path='/' component={HomePage}/>
      <Route path='/london-store' component={LondonStore}/>
      <Route path='/shanghai-store' component={ShanghaiStore}/>
      <Route path='/shop' component={ShopPage}/>

      <Footer/>
    </div>
  );
}

export default App;
