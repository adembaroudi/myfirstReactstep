import {Form , Button , Card} from 'react-bootstrap'
import { FaUser,FaMailBulk, FaBirthdayCake,FaMobile,FaKey} from "react-icons/fa";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  return (
    <div className="App">
      
  <Card border="info" style={{ width: '30rem' }}>
    <Card.Header  className="card-header"><h3>Formulaire</h3></Card.Header>
    <Card.Body>
   
      <Card.Text>
<Form >
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label><FaUser></FaUser> First Name</Form.Label>
    <Form.Control type="text" placeholder="Enter your first name" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label><FaUser></FaUser> Last Name</Form.Label>
    <Form.Control type="text" placeholder="Enter last name" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label><FaMailBulk></FaMailBulk> Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label><FaBirthdayCake></FaBirthdayCake> Birthday</Form.Label>
    <Form.Control type="date" placeholder="Enter email" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label><FaMobile></FaMobile> phone number</Form.Label>
    <Form.Control type="number" placeholder="Enter your phone number" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label><FaKey></FaKey> Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Button className="button" variant="primary" type="submit">
    Submit
  </Button>
</Form>
      </Card.Text>
    </Card.Body>
  </Card>

    </div>
  );
}

export default App;
