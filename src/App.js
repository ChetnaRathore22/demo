import logo from './logo.svg';
import './App.css';
import Navbar from './component/navbar';
import { Route, Routes } from 'react-router-dom';
import Student from './component/student';
import ToDo from './component/todolist';

function App() {
  return <div>
     <Navbar/>
     <Routes>
      <Route path='/student' element={<Student/>}></Route>
      <Route path='/todo' element={<ToDo/>}></Route>
     </Routes>
  </div>
    
}

export default App;
