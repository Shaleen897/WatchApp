import React, { useState } from "react";
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/footer/Footer';
import { AuthcontextProvider } from "./Components/context/Authcontext";
import ProtectedRoute from "./ProtectedRoute";

/*Components*/
import { Home } from './Components/pages/Home';
import { Account } from './Components/pages/Account';
import { Mwatch } from './Components/pages/Mwatch';
import Detail from './Components/pages/Detail';
import Catalog from './Components/pages/Catalog';

function App() {

  const [loading, setLoading] = useState(true);
  const spinner = document.getElementById("spinner");
  if (spinner) {
    setTimeout(() => {
      spinner.style.display = "none";
      setLoading(false);
    }, 2000);
  }

  return (
    
    !loading && (
      <>
    <AuthcontextProvider>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/account" element={
            <ProtectedRoute>
              <Account />
            </ProtectedRoute>
          } />
          <Route path={`/Mwatch`} element={
            <ProtectedRoute>
              <Mwatch />
            </ProtectedRoute>} />
          <Route
            path='/:category/:id'
            element={<Detail />}
          />

          

          <Route
            path='/:category'
            element={<Catalog/>}
          />

          <Route
            path='/:category/search/:keyword'
            element={<Catalog/>}
          />
      </Routes>

      <Footer />
      </AuthcontextProvider>
      
    </>
      )
  );
}

export default App;
