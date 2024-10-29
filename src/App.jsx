import AOS from 'aos';
import 'aos/dist/aos.css';
import Footer from './components/Layouts/Footer'
import Header from './components/Layouts/Header'
import { useEffect } from 'react';
import Hero from './components/Layouts/Hero';
import { useLocation } from 'react-router-dom';
import { UserContext } from './UseContext';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App(props) {
  const location = useLocation();
  const username = JSON.parse(localStorage.getItem('authUsername'))
  console.log(username);

  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100
    })
    AOS.refresh();
  }, [])
  return (
    <UserContext.Provider value={{ userName: username }}>
      <Header />
      {location.pathname !== '/login' && location.pathname !== '/register' && <Hero />}
      {props.children}
      <Footer />
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </UserContext.Provider>
  )
}

export default App
