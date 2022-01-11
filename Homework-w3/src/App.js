import './App.css';
import React from 'react';
import { Routes, Route, Link } from "react-router-dom";
import Auth from "./auth";

// farklı sayfalara yönlendirmek için react-router-dom indirdik ve import ediyoruz

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="register" element={<Register/>} />
      </Routes>
    </div>
  );
}

function Home() {
  return (
    <>
      <main>
        <h2>Giriş Sayfasına Hoş Geldiniz :)</h2>
        <p>Giriş sayfasına gidiş için linke tıklayınız.</p>
      </main>
      <nav>
        <Link to="/login">Giriş Yap</Link>
      </nav>
    </>
  );
}

function LoginPage() {
  return (
    <>
     <Auth></Auth>
      <nav>
        <Link to="/">Anasayfa </Link> 
      </nav>
    </>
  );
  }

  function Register(){
    <>
    <nav>
      <Link to="/register">Register for free </Link> 
    </nav>
    </>
  }
  export default App;