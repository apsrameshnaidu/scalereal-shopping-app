import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import ProductJson from "./shared/products.json";
import ProductList from "./home/product-list/product-List";
import { Operations } from "./redux/duck/index";
import AddressForm from "./home/address-form/address-form";
import CartPage from "./home/cart-page/cart-page";
import CategoryList from "./home/category-list/category-List";

class App extends React.Component {

  componentDidMount(){
    Operations.setAllProducts(ProductJson);
  }

  render() {
    return (
      <Router>
        <div className="main-Container bg-white">
          <Switch>
            <Route exact path="/categoryList" component={CategoryList} />
            <Route exact path="/category/:categoryId/products" component={ProductList} />
            <Route exact path="/addressForm" component={AddressForm} />
            <Route exact path="/cartpage" component={CartPage} />
            <Route path="/">
              <Redirect to="categoryList" />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
