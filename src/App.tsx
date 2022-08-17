import './styles/App.scss';
import ToppingPicker from './components/ToppingPicker';
import { PizzaProvider } from './Contexts/ToppingContext/PizzaContext';
import { NotificationsProvider } from '@mantine/notifications'
import Checkout from './components/Checkout';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <PizzaProvider>
        <NotificationsProvider
          limit={1}

          // Accessability for screen readers
          aria-live="assertive"
        >
          <div className="App">
            <Routes>
              <Route path="/" element={<ToppingPicker />} />
              <Route path="/checkout" element={<Checkout />} />
            </Routes>
          </div>
        </NotificationsProvider>
      </PizzaProvider>
    </BrowserRouter>
  );
}

export default App;
