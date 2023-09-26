import { BrowserRouter } from 'react-router-dom';
import './App.css';
import RoutesApp from './routes';
import AuthProvider from './contexts/auth';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <RoutesApp/>
      </AuthProvider>
      <ToastContainer autoClose={3000}/>
    </BrowserRouter>
  );
}

export default App;
