import React from "react";
import "./App.scss";
import Layout from "./components/layout/Layout";
import Route from "./router/Route";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="app-wapper">
      <Layout>
        <Route />
      </Layout>
      <ToastContainer />
    </div>
  );
}

export default App;
