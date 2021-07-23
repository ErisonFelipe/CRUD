# CRUD
# Tecnologis utilizadas
## BackEnd: express, node, sequelize, mysql, cors
## FrontEnd: React, axios

# App.js
import React, {Component} from 'react';
import api from './api';
import User from './table';

class App extends Component{
  state = {
    usuarios: []
  }
  async componentDidMount(){
    const response = await api.get('/usuarios');
    // console.log(response.data)
    this.setState({usuarios:response.data })
  }
  
  render(){
    const {usuarios} = this.state;
    console.log(usuarios)
    return(
      
      <div>
        <User></User>
        <ul style={{listStyleType: "none"}}>
          {usuarios.map(usuario =>(
            <li key="usuario_id">
              <h2>ID: {usuario.id}</h2>
              <h2>Nome: {usuario.nome}</h2>
              <h2>Email: {usuario.email}</h2>
              <h2>Telefone: {usuario.telefone}</h2>
              
            </li>
          ))}
        </ul>
      </div>
    );
  };
};

export default App;

#api.js
import axios from 'axios';

const api = axios.create({
    baseURL: "http://localhost:3030"
});

export default api;

