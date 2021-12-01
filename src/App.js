import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import LandingPage from './Pages/Landing_page';
import Video from './Pages/Video';
import MangoHaze from './Pages/MangoHaze';
import Quiz from './Pages/Quiz';
import Datacapture from './Pages/Datacapture';
import Instructions from './Pages/Instructions';
import Prize from './Pages/Prize';
import Redirecttoquiz from './Pages/Redirecttoquiz';
import ThankYou from './Pages/ThankYou';

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
        <Switch>
            <Route path='/' exact strict component={LandingPage}/>
            <Route path='/points' exact strict component={Redirecttoquiz}/>
            <Route path='/prize' exact strict component={Prize}/>
            <Route path='/educational-video' exact strict component={Video}/>
            <Route path='/mango-haze' exact strict component={MangoHaze}/>
            <Route path='/Quiz' exact strict component={Quiz}/>
            <Route path='/data-capture' exact strict component={Datacapture}/>
            <Route path='/instructions' exact strict component={Instructions} />
            <Route path='/ThanksForEntry' exact strict component={ThankYou} />
        </Switch>
    </Router>
  );
}

export default App;
