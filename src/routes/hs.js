import React, { Component, lazy, Suspense } from 'react';
import '../App.css';

const HomeScreen = lazy(() => import ('../views/hs'));

class RouteHomeScreen extends Component {

  render() {
    return (
      <div className="App">
        <Suspense fallback={<div className='LoadingPage'><h1>Loading...</h1></div>}>
          <HomeScreen />
        </Suspense>
      </div>
    );
  }
}

export default RouteHomeScreen;
