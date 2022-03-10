import logo from './logo.svg';
import './App.css';



function App(props) {
 const {employee}=props;
    
return(
  <div className="container">
    <div className = "profile-img-container">
      <img className = "profile" src = {employee.profileImg} width ="100" height="100"/>
    </div>
  <div className = "title">
    <h1>{employee.name}</h1>
  </div>
  <div className = "profile-info">
    <label>location</label>
    <strong>{employee.location}</strong>
  </div>
  <div className = "profile-info">
    <label>bloodGroup</label>
    <strong>{employee.bloodGroup}</strong>
  </div>
  <div className = "age">
    <label>Age</label>
    <strong>{employee.age}</strong>
  </div>
</div>
);
}



export default App;
