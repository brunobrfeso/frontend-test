import React, { Component} from 'react';
import Footer from './footer';
import {browserHistory} from 'react-router';
import '../App.css';

class View extends Component {

  constructor(props) {

      super(props);
      this.state = {
        produto: [],
      };
  }

  componentDidMount () {

    document.getElementById('Loading').innerHTML = 'Loading...';

    var ref = window.location.href.replace('https://brunobrfeso.github.io/frontend-test/', '');

    fetch('https://frontend-test-backend.herokuapp.com/produto'
    ,{
      method: 'POST',
      headers:{
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        "slug": ref,
      }),

    })
      .then(Response => Response.json())
      .then((result) => {
        console.log(result)
        this.setState({
          produto: result
        })
        document.getElementById('Loading').innerHTML = '';
      })
  }

  render() {
    return (
      <div className="view">
        <button onClick={browserHistory.goBack} >Voltar</button>
        <br />
        {this.state.produto.map(result =>
          <div>
            <img src={'/img/' + result.img} />
            <h1>{result.title}</h1>
            <p>{result.description}</p>
            <h2>Preço: {result.price}</h2>
            Share:
            <br />
            <a href={result.fblink} target="_blank"><img className='socialIcon' src='/icon/facebook.png' /></a>
            <a href={result.twlink} target="_blank"><img className='socialIcon' src='/icon/twitter.png' /></a>
            <div className='More'>
              <h2>Mais Detalhes</h2>
              <p>Imprint: {result.imprint}</p>
              <p>Rating: {result.rating}</p>
              <p>Format: {result.format}</p>
              <p>UPC: {result.upc}</p>
              <p>Data: {result.date}</p>
              <p>Escritor: {result.escritor}</p>
              <p>Penciller: {result.penciller}</p>
              <p>Cover: {result.cover}</p>
            </div>
          </div>

        )}
        <div className='loadingItem'><p id='Loading'>Loading...</p></div>
        <Footer />
      </div>
    );
  }
}

export default View;
