import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

// import components
import StreamList from "./streams/StreamList";
import StreamCreate from "./streams/StreamCreate";
import StreamShow from "./streams/StreamShow";
import StreamEdit from "./streams/StreamEdit";
import StreamDelete from "./streams/StreamDelete";

import Header from './Header';
import NoMatch from './NoMatch';

const App = () => {
    return (
        <div className="ui container">
            
            <BrowserRouter>
                <>
                    <Header />
                    <Switch>
                        <Route path="/" exact component={StreamList} />
                        <Route path="/streams/new" component={StreamCreate} />
                        <Route path="/streams/edit" component={StreamEdit} />
                        <Route path="/streams/delete" component={StreamDelete} />
                        <Route path="/streams/show" component={StreamShow} />
                        <Route path="*" component={NoMatch} />
                    </Switch>
                    
                </>
            </BrowserRouter>
        </div>
    )
}

export default App
