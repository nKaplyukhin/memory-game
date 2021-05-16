import './App.css';
import { Route, Switch } from 'react-router';
import { StartField } from './StartField/StartField';
import { GameContainer } from './Game/Game';
import { connect } from 'react-redux';
import { startTimer, changeName, addResult } from './redux/reduxStore';
import { Link } from 'react-router-dom';
import { Results } from './Results/Results';
import { StopGame } from './StopGame/StopGame';

function App(props) {
  return (
    <div className='App'>
      <div className='container'>
        <Switch>
          <Route exact path='/'>
            <StartField name={props.name} changeName={props.changeName} />
          </Route>
          <Route path='/game'>
            <GameContainer startTimer={props.startTimer} timer={props.timer}
              addResult={props.addResult} />
          </Route>

          <Route path='/stop'>
            <StopGame timer={props.timer}/>
          </Route>

          <Route path='/results'>
            <Results results={props.results} />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => state

export default connect(mapStateToProps, { startTimer, changeName, addResult })(App);
