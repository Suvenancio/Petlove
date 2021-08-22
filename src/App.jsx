import React from 'react';
import Contato from './Pages/Contato';
import Home from './Pages/Home';
import QuemSomos from './Pages/QuemSomos/index';
import { GlobalStyles } from './Styles/GlobalStyles';
import { ThemeProvider } from 'styled-components';
import { light } from './Styles/Themes/Light';
import * as S from './Styles/Themes/App.styles'
import Header from './Componets/Header';
import {BrowserRouter, Switch, Route} from 'react-router-dom'

import Pets from './Pets';

const App = () =>{
    return (
        <ThemeProvider theme={light}>
            <GlobalStyles />
                <S.Container>  
                    <BrowserRouter>
                      <Header />
                            <Switch>

                                <Route path='/' component={Home} exact/>
                                <Route path='/Pets' component={Pets} />
                                <Route path='/Contato' component={Contato} />
                                <Route path='/QuemSomos' component={QuemSomos} />

                
                            </Switch>
                    </BrowserRouter>  
                 </S.Container>
        </ThemeProvider>
    )
}

export default App