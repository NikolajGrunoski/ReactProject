import ReactDOM from 'react-dom'
import React from 'react'
import Login from './Login'
import Alert from './Alert'
import Register from './Register'
import ExpensesPage from '.Expences'


import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'




const app = document.getElementById('app')

const Routes = () => {
    return(
        <Router>
            <Switch>
                <Route exact path='/' component={Login}/>
                <Route exact path='/register' component={Register}/>
                <Route exact path='products' component={ProductsPage}/>
                <Route exact path='newproduct' component={NewProduct}/>
                <Route exact path='expenses' component={ExpensesPage}/>
                <Route exact path='alert' component={Alert}/>
            </Switch>
        </Router>
    )
}

ReactDOM.render(<Routes/>, app)