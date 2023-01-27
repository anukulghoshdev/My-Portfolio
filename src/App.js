
import './App.css';
import { RouterProvider } from 'react-router-dom';
import router from './Routes/Routes/Routes';
import Particles from './components/Particles';

function App() {
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
      {/* <Particles/> */}
    </div>
  );
}

export default App;
