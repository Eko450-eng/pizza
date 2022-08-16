import './styles/App.scss';
import ToppingPicker from './components/ToppingPicker';
import { PizzaProvider } from './Contexts/ToppingContext/PizzaContext';
import { NotificationsProvider } from '@mantine/notifications'


function App() {
  return (
    <PizzaProvider>
      <NotificationsProvider limit={1}>
        <div className="App">
          <ToppingPicker />
        </div>
      </NotificationsProvider>
    </PizzaProvider>
  );
}

export default App;
