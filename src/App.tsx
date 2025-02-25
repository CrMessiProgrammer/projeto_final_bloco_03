import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import DeletarCategoria from "./components/categorias/deletarcategorias/DeletarCategoria";
import FormCategoria from "./components/categorias/formcategoria/FormCategoria";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import ListaCategorias from "./components/categorias/listacategorias/ListaCategorias";
import ListarProdutos from "./components/produtos/listarprodutos/ListarProdutos";
import FormProduto from "./components/produtos/formproduto/FormProduto";
import DeletarProduto from "./components/produtos/deletarprodutos/DeletarProduto";

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <div className="flex flex-col min-h-screen bg-gray-200 ">
          <div className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/categorias" element={<ListaCategorias />} />
              <Route path="/cadastrarcategoria" element={<FormCategoria />} />
              <Route path="/editarcategoria/:id" element={<FormCategoria />} />
              <Route path="/deletarcategoria/:id" element={<DeletarCategoria />} />
              <Route path="/produtos" element={<ListarProdutos />} />
              <Route path="/cadastrarproduto" element={<FormProduto />} />
              <Route path="/editarproduto/:id" element={<FormProduto />} />
              <Route path="/deletarproduto/:id" element={<DeletarProduto />} />
            </Routes>
          </div>
        </div>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App