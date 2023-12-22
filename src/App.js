import ListArticles from './components/ListArticles';
import AddArticle from './components/AddArticle';
//import Menu from './components/Menu';
import EditArticle from './components/EditArticle';
//import Listclient from './components/Listclient';
import ListCards from './components/clientSide/ListCards';
import Addclient from './components/Addclient';
//import ListArticles2  from './components2/ListeAritcles2';
import { CartProvider } from "use-shopping-cart";
import './App.css';
import Cart from "./components/clientSide/Cart"
import { BrowserRouter as Router ,Routes,Route} from 'react-router-dom';
//import EditClients from './components/Editclients';
import Home from './components/Home'
import PdfCart from "./components/clientSide/PdfCart";
import  Dashboard  from './components/admin/dashboard';
import LoginClient from './components/authentificationClient/loginclient';
import Menu from './components/Menu'

function App() {
  return (
    /*<div className="App">
      <ListArticles />
      <ListArticles2 />



    </div>*/
    <CartProvider>
    <Router>
      <Menu />
      <Routes>
        <Route path='/articles' element={<ListArticles/>}/>
        
        {/*<Route path='/' element={<ListCards/>}/>*/}
        {/*<Route path='/clients' element={<Listclient/>}/>*/}
        <Route path='/AddClient' element={<Addclient/>}/>
        {/*<Route path="/editclient/:id" element={<EditClients />} />*/}
        <Route path="/editArticle/:id" element={<EditArticle />} />
        <Route path='/' element={<Home/>}/>
        <Route path='/AddArticle' element={<AddArticle />} />
        <Route path='/Cart' element={<Cart/>}/>
        <Route path='/pdfCart' element={<PdfCart/>}/>
        <Route path='/admin' element={<Dashboard/>}/>
        <Route path="/Listcards" element={<ListCards />} />
        <Route path="/loginclient" exact element={<LoginClient/>}/>
      </Routes>

      
    </Router>
    </CartProvider> 
  );
}

export default App;


