import './App.css';
// import IndexLayout from './Layout/IndexLayout/IndexLayout';
// import Index from './Components/Index/Index';
import {router} from './Pages/index.js'
import { RouterProvider } from 'react-router-dom';

function App() {
  return (
    <div className="container">
      <RouterProvider router={router}/>
      {/* <IndexLayout>
        <Index />
      </IndexLayout> */}
    </div>
  );
}

export default App;

