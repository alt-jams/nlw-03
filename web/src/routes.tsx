import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Landing from './pages/landing';
import OrphanagesMap from './pages/OrphanagesMap';
import Orphanage from './pages/Orphanage';
import CreateOrphanage from './pages/CreateOrphanage';


function Routes(){
    return(
        <BrowserRouter>
            <Switch>
            <Route path="/" exact component={Landing} />
            <Route path="/app" component={OrphanagesMap} />
            <Route path="/orphanages/:id" component={Orphanage} />
            <Route path="/orphanage/create" component={CreateOrphanage} />
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;