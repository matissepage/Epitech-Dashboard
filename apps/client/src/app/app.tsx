import styled from 'styled-components';
import { ReactComponent as Logo } from './logo.svg';
import { FormCreate } from './Components/Form/Form'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import { HomePage } from './Pages/HomePage/HomePage';

const StyledApp = styled.div`
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  left: 0;
  top: 0;
  width: 100%;
  font-family: 'PT Sans', sans-serif;
`;

export function App() {
  return (
    <StyledApp>
      <Router>
        <Switch>
          <Route path='/' exact>
            <FormCreate type="SignUp"/>
          </Route>
          <Route path='/signin' exact>
            <FormCreate type="SignIn"/>
          </Route>
          <Route exact path='/home' component={HomePage} />
        </Switch>
    </Router>
    </StyledApp>
  );
}

export default App;
