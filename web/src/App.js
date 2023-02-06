import Home from './views/home'
import Courses from './views/courses'
import CourseCreator from './views/courseCreator'

import {Route, Routes} from 'react-router-dom';
import MainLayout from "./layouts/main";

function App() {

  return (
    <MainLayout>
      <Routes>
        <Route path="/" exact element={<Home/>}/>
        <Route path="/courses" exact element={<Courses/>}/>
        <Route path="/content-creator" exact element={<CourseCreator/>}/>
      </Routes>
    </MainLayout>
  );
}

export default App;
