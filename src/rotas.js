import React from "react";
import { Switch, Route } from "react-router-dom";


import Home from './paginas/home';
import FAQ from "./paginas/faq";
import cadastrase from "./paginas/cadastrese";
import busca from "./paginas/busca";
import login from "./paginas/login";
//import categorias from "./paginas/categorias";

import perfilprest from "./paginas/perfilprestador";
import perfilcliente from "./paginas/perfilcliente";
import cadastroprest from "./paginas/cadastroprest";
import perguntas from "./paginas/perguntas"
import listar from './paginas/listar'





function Routes() {
  return (
    <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/Home" exact component={Home}/>
        <Route path="/faq" exact component={FAQ}/>
        <Route path="/cadastrese" exact component={cadastrase}/>
        <Route path="/busca" exact component={busca}/>
        <Route path="/login" exact component={login}/>
        <Route path="/perfilprest" exact component={perfilprest}/>
        <Route path="/perfilcliente" exact component={perfilcliente}/>
        <Route path="/cadastroPrest" exact component={cadastroprest}/>
        <Route path="/perguntas" exact component={perguntas}/>
        <Route path='/listar' exact component={listar}/>
    </Switch>
  );
}

export default Routes;
