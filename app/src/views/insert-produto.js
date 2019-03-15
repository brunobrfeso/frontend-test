import React, { Component } from 'react';
import '../App.css';

class InsertProduto extends Component {

  cadastraData = () => {
    fetch('http://localhost:3001/insert-produto'
    ,{
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body:JSON.stringify({

          "title": document.getElementById('title').value,
          "slug": document.getElementById('slug').value,
          "price": document.getElementById('price').value,
          "img": document.getElementById('img').value,
          "date": document.getElementById('date').value,
          "description": document.getElementById('description').value,
          "escritor": [
            document.getElementById('escritor').value
          ],
          "cover": [
            document.getElementById('cover').value
          ],
          "penciller": [
            document.getElementById('penciller').value
          ],
          "active": document.getElementById('active').value,
          "fblink": document.getElementById('fblink').value,
          "twlink": document.getElementById('twlink').value,
          "tags": [
            document.getElementById('tags').value,
          ],
          "imprint": document.getElementById('imprint').value,
          "rating": document.getElementById('rating').value,
          "format": document.getElementById('format').value,
          "upc": document.getElementById('upc').value,

        }),

    })
      .then(Response => Response.json())
      .then((result) => {
        console.log(result);
        window.location.href = '/';
      })
  }

  render() {
    return (
      <div className="insertProduto">
        <h1>Inserir novo registro</h1>
        <table>
          <tr>
            <td>
              <input type='text' id='title' placeholder='Titulo' required/>
            </td>
          </tr>
          <tr>
            <td>
              <input type='text' id='slug' placeholder='Slug' required/>
            </td>
          </tr>
          <tr>
            <td>
              <input type='numeric' id='price' placeholder='Price' required/>
            </td>
          </tr>
          <tr>
            <td>
              <input type='text' id='img' placeholder='Imagem' required/>
            </td>
          </tr>
          <tr>
            <td>
              <input type='date' id='date' required/>
            </td>
          </tr>
          <tr>
            <td>
              <input type='text' id='description' placeholder='Descricao' required/>
            </td>
          </tr>
          <tr>
            <td>
              <input type='text' id='escritor' placeholder='Escritor' required/>
            </td>
          </tr>
          <tr>
            <td>
              <input type='text' id='cover' placeholder='Cover' required/>
            </td>
          </tr>
          <tr>
            <td>
              <input type='text' id='penciller' placeholder='Penciller' required/>
            </td>
          </tr>
          <tr>
            <td>
              <input type='boolean' id='active' placeholder='Active' required/>
            </td>
          </tr>
          <tr>
            <td>
              <input type='text' id='fblink' placeholder='Share Facebook' required/>
            </td>
          </tr>
          <tr>
            <td>
              <input type='text' id='twlink' placeholder='Share Twitter' required/>
            </td>
          </tr>
          <tr>
            <td>
              <input type='text' id='tags' placeholder='Tags' required/>
            </td>
          </tr>
          <tr>
            <td>
              <input type='text' id='imprint' placeholder='Imprint' required/>
            </td>
          </tr>
          <tr>
            <td>
              <input type='text' id='rating' placeholder='Rating' required/>
            </td>
          </tr>
          <tr>
            <td>
              <input type='text' id='format' placeholder='Format' required/>
            </td>
          </tr>
          <tr>
            <td>
              <input type='text' id='upc' placeholder='UPC' required/>
            </td>
          </tr>
          <button onClick={this.cadastraData}>Cadastra</button>
        </table>

      </div>
    );
  }
}

export default InsertProduto;
