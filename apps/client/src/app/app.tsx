import styled from 'styled-components';

import { ReactComponent as Logo } from './logo.svg';
import Form from './Components/Form/Form'
import SignIn from './Pages/SignIn/FormSignIn'
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
            <div className="App">
                <Route path='/' exact component={Form}/>
                <Route path='/signin' exact component={SignIn}/> 
            </div>
        </Switch>
    </Router>
    </StyledApp>
  );
}

export default App;
