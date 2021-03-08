import React, { Component } from 'react';
import M from 'materialize-css';
import 'materialize-css/dist/css/materialize.min.css';
import data from '../data/info_artigo-5.json';
import { Link } from 'react-router-dom';

class Artigo5 extends Component {
  componentDidMount() {
    const options = {
      onOpenStart: () => {
        console.log('Open Start');
      },
      onOpenEnd: () => {
        console.log('Open End');
      },
      onCloseStart: () => {
        console.log('Close Start');
      },
      onCloseEnd: () => {
        console.log('Close End');
      },
      inDuration: 250,
      outDuration: 250,
      opacity: 0.5,
      dismissible: false,
      startingTop: '4%',
      endingTop: '10%',
    };
    M.Modal.init(this.Modal, options);

    //let instance = M.Modal.getInstance(this.Modal);
    //instance.open();
    //instance.close();
    //instance.destroy();
  }

  render() {
    return (
      <div className="teste">
        {/* If you want Bottom Sheet Modal then add 
                        bottom-sheet class to the "modal" div
                        If you want Fixed Footer Modal then add
                        modal-fixed-footer to the "modal" div*/}
        <div className="modal-content">
          <div key={data.id} border="secondary">
            <div variant="warning">
              <div>
                <b>Programa:</b> {data.programa}
              </div>
              <br />
              <div>
                <b>Area:</b> {data.area}
              </div>
              <br />
              <div>
                <b>Projeto:</b> {data.projeto}
              </div>
              <br />
              <div>
                <b>Título:</b> {data.titulo}
              </div>
              <br />
              <div>
                <b>Autor:</b> {data.autor}
              </div>
              <br />
              <div>
                <b>Data de publicação:</b> {data.dataPublicacao}
              </div>
              <br />
              <div>
                <b>Palavra-chave:</b> {data.palavrasChave}
              </div>
              <br />
              <div>
                <b>Download:</b> link
              </div>
              <br />
              <div>
                <b>Resumo:</b> {data.resumo}
              </div>
            </div>
          </div>
        </div>
        <div className="modal-footer">
          <Link to="/" className="modal-close waves-effect waves-red btn-flat">
            Fechar
          </Link>
        </div>
      </div>
    );
  }
}

export default Artigo5;
