import {data} from './data'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import './App.css';
import "antd/dist/antd.css";
import {Nav} from './components/Nav'
import { Layout } from 'antd';

export const App = () => {
  return (
    
      <Router>
         <div className="App">
            <Switch>
            
                {
                  data.map((obj, id) => {
                    return <Route key={id} exact={obj.exact} path={obj.route} children={<obj.component/> }/>
                  })
                }
              
            </Switch>
          </div>
      </Router>
     
    
  );
}


