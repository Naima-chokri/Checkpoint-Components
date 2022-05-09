import './App.css';
import ProfilePhoto from './Component/Profile/ProfilePhoto';
import FullName from './Component/Profile/FullName';
import Address from './Component/Profile/Address';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col } from 'react-bootstrap';


function App() {
  return (
    <div className="App container-fluid  " >
      <div className="row">
        <Col className="col-md-4"> 
            <ProfilePhoto />
        </Col>
        <Col className="col-md-8">
           <FullName />
           <Address />
        </Col>
      </div>
     
    
    </div>
  );
}

export default App;
