import React, { Component, lazy, Suspense } from 'react';
import { BrowserRouter, Route, Switch, Redirect, Link } from 'react-router-dom';

const View = lazy(() => import('./routes/view'));
const HS = lazy(() => import('./routes/hs'));

class Routes extends Component {

    constructor(props) {
        super(props);
        this.state = {
          produtos: [],
        };
    }

    componentDidMount() {

        fetch('http://localhost:3001/produtos')
          .then(Response => Response.json())
          .then((result) => {
              console.log(result)
              this.setState({
                  produtos: result
              })
          })
    }

    render() {
      return (
        <div>
          <BrowserRouter>
              <Switch>
                <Suspense fallback={<div className='LoadingPage'><h1>Loading...</h1></div>}>
                  {this.state.produtos.map(produtos =>
                    <Route exact path={'/' + produtos.slug} component={View} />
                  )}
                  <Route exact path='/' component={HS} />
                </Suspense>
              </Switch>
          </BrowserRouter>
        </div>

      );
    }
}

export default Routes;
