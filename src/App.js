import { Route, Routes } from "react-router-dom";
import './App.css';
import Navbar from './components/Navbar';
import Home from "./components/Home";
import Courses from "./components/Courses";
import Student from "./components/Student";
import Faculty from "./components/Faculty";
import AddFaculty from "./components/AddFaculty";
import ViewFaculty from "./components/ViewFaculty";
import UpdateFaculty from "./components/UpdateFaculty";
import DeleteFaculty from "./components/DeleteFaculty";



function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path="courses" element={<Courses/>}/>
        <Route path="faculty" element={<Faculty/>}> 
        <Route path="addFaculty" element={<AddFaculty/>} />
        <Route path="viewFaculty" element={<ViewFaculty/>} />
        <Route path="updateFaculty" element={<UpdateFaculty/>} />
        <Route path="deleteFaculty" element={<DeleteFaculty/>} />
        </Route>
        <Route path="student" element={<Student/>}/>
      </Routes>
    </div>
  );
}

export default App;
