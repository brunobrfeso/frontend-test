import React, { Component, lazy, Suspense} from 'react';
import { Link } from 'react-router-dom';
import Footer from './footer';
import '../App.css';

class HomeScreen extends Component {

  constructor(props) {

      super(props);
      this.state = {
        busca: [],
        limit: 2,
      };
  }

  componentDidMount = () => {

    document.getElementById('Loading').innerHTML = 'Loading...';

    this.setState({
      limit: this.state.limit + 2,
    })


    fetch('https://frontend-test-backend.herokuapp.com/produtos'
    , {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        'limit': this.state.limit,
      }),

    })
      .then(Response => Response.json())
      .then((result) => {
        console.log(result)
        this.setState({
          busca: result
        })

        document.getElementById('Loading').innerHTML = '';

      })


  }

  render() {
    return (

        <div className="homeScreen">
          <h1>Captain Marvel</h1>
          <div className='Produtos'>
            <div id='Produto' className="produto">
              {this.state.busca.map(result =>
                <div>
                    <Link to={{ pathname: "/" + result.slug, state: {from: this.props.location}}}>
                      <figure>
                        <img src={'/img/' + result.img} />
                        <h1>{result.title}</h1>
                      </figure>
                    </Link>
                </div>
              )}
              <div className='loadingItem'><p id='Loading'></p></div>
            </div>
            <button onClick={this.componentDidMount}>Load More</button>
          </div>
          <Footer />
        </div>

    );
  }

}

export default HomeScreen;
