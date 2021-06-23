import './styles/global.scss'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Home } from "./pages/Home";
import { NewRoom } from './pages/NewRoom';
import { AuthContextProvider } from './contexts/AuthContext';
import { Room } from './pages/Room';


function App() {

  return (
    <BrowserRouter>
      <AuthContextProvider>
        <Switch>
          <Route path="/" exact component={Home} /> {/* exact aqui eh um valor booleano que indica que o path tem que ser exatamente o que foi passado*/}
          <Route path="/rooms/new" component={NewRoom} />
          <Route path="/rooms/:id" component={Room} />
        </Switch>
      </AuthContextProvider>
    </BrowserRouter>
  );
}

export default App;
