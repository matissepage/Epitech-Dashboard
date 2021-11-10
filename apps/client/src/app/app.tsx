import styled from 'styled-components';
import { ReactComponent as Logo } from './logo.svg';
import { FormCreate } from './Components/Form/Form'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'

const StyledApp = styled.div`
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: 'PT Sans', sans-serif;
`;

export function App() {
  return (
    <StyledApp>
      <Router>
        <Switch>
            <>
            <div className="App">
                <Route path='/' exact>
                  <FormCreate type="SignUp"/>
                </Route>
                <Route path='/signin' exact>
                  <FormCreate type="SignIn"/>
                </Route>
            </div>
            </>
        </Switch>
    </Router>
    </StyledApp>
  );
}

export default App;
