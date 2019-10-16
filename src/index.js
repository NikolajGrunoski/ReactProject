import ReactDOM from 'react-dom'
import React from 'react'
import Login from './components/Login'
import Register from './components/Register'
import ProductsPage from './components/ProductsPage'
import NewProduct from './components/NewProduct'
import ExpencesPage from './components/ExpencesPage'
import Alert from './components/Alert'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'

const app = document.getElementById('app')

// const Menu = () => {
//     return (
//         <ul>
//             <li>
//                 <Link to='/'>Login</Link>
//             </li>
//             <li>
//                 <Link to='/register'>Register</Link>
//             </li>
//             <li>
//                 <Link to='/products'>Products</Link>
//             </li>
//             <li>
//                 <Link to='/newproduct'>New Product</Link>
//             </li>
//             <li>
//                 <Link to='/expences'>Expences</Link>
//             </li>
//             <li>
//                 <Link to='/alert'>Alert</Link>
//             </li>
//         </ul>
//     )
// }


const Routes = () => {
    return(
        <Router>
            <Switch>
                <Route exact path ='/' component={Login}/>
                <Route exact path='/register' component={Register}/>
                <Route exact path='/products' component={ProductsPage}/>
                <Route exact path='/newproduct' component={NewProduct}/>
                <Route exact path='/expences' component={ExpencesPage}/>
                <Route exact path='/alert' component={Alert}/>
            </Switch>
        </Router>
    )
}

ReactDOM.render(<Routes/>, app) 