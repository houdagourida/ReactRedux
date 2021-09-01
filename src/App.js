import './App.css';
import AddTask from './Component/AddTask';
import TaskList from './Component/TaskList';
import Filter from './Component/Filter';
import 'semantic-ui-css/semantic.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
 


  return (
    <div className="App">
      <h1>Task List</h1>
     <AddTask  />
     <Filter/>
     <TaskList />
     
      
      
   
    </div>
  );
}

export default App;
