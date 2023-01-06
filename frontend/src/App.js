import { Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import ToDoListContent from './ToDoListPage';
import Calendar from './Calendar';
import Goals from './Goals';
/*import Login from './Login'; */

/* Need to implement Login Feature by getting user to login first before adding or removing tasks */

function App() {
    return (
        <>
        <Navbar />
        <Routes>
            <Route path='/' element={ <ToDoListContent />} />
            <Route path='/goals' element={ <Goals /> } />
            <Route path='/calendar' element={ <Calendar /> } />
        </Routes>
        </>
    );
}

export default App;
