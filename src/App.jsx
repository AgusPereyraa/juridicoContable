import './App.css';
import IndexLayout from './Layout/IndexLayout/IndexLayout';
import Index from './Components/Index/Index';

function App() {
  return (
    <div className="container">
      <IndexLayout>
        <Index />
      </IndexLayout>
    </div>
  );
}

export default App;

