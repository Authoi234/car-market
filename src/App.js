import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import AddCar from './components/Home/Cars/AddCar';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home></Home>
    },
    {
      path: '/addCar',
      element: <AddCar></AddCar>
    }
  ])

  return (
    <div className="App bg-gray-950">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
