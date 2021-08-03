import { Route, Switch } from 'react-router-dom';
import store from './app/store';
import Header from './components/Header';
import Footer from './components/Footer';
import SignUp from './features/Sign-up';
import LogIn from './features/Log-in';
import HomePage from './features/HomePage';
import Cart from './features/Cart';
import { Provider } from 'react-redux'
import ProductDetail from './features/ProductDetail';
import Notify from './features/Notify';

function App() {
  return (
    <Provider store={store}>
      <Header />
      <Switch>
        <Route path="/detail/:id" component={ProductDetail} />
        <Route path="/cart" component={Cart} />
        <Route path="/notify" component={Notify} />
        <Route path="/signUp" component={SignUp} />
        <Route path="/logIn" component={LogIn} />
        <Route path="/" component={HomePage} />
      </Switch>
      <Footer />
    </Provider>
  );
}

export default App;
