import './App.css';
import TodoInput from './component/TodoInput';

import TodoList from './component/TodoList';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <div className="App my-5">
     <TodoInput/>
     <TodoList/>

    </div>
  );
}

export default App;
