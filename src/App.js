import {data} from './data'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import './App.css';
import "antd/dist/antd.css";
import {Nav} from './components/Nav'
import { Layout } from 'antd';


const { Header, Footer, Sider, Content } = Layout;

export const App = () => {
  return (
    
      <Router>
         <Layout>
           {/* sidebar */}
           <Sider>
             <Nav/>
           </Sider>

           {/* content */}
           <Content>
              <Switch>
                  
                  {
                    data.map((obj, id) => {
                      return <Route key={id} exact={obj.exact} path={obj.route} children={<obj.component/> }/>
                    })
                  }
                
              </Switch>
           </Content>
          </Layout>
      </Router>
     
    
  );
}


