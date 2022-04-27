import './App.css';
import { useState } from 'react';

let initList = [1,2,3,4,5,6,7,8];


function App() {

//Hooks

const [list, setList] = useState(initList);
const [draggedItem, setDraggedItem] = useState(null);

function onDragHandle(e, ind){
setDraggedItem(list[ind]);
e.dataTransfer.effectAllowed = "move";
e.dataTransfer.setData('text/html', e.target.parentNode);
e.dataTransfer.setDragImage(e.target.parentNode, 20,20);
}


function onDragOverHandle(e, ind){
  const draggedOverItem = list[ind];
  if (draggedOverItem === draggedItem) {
    return
  }

const items = list.filter(item => item !== draggedItem);
items.splice(ind, 0, draggedItem);

setList(items)
}

  return (
    <div className="App">
      <header className="App-header">
<h1>Drag and Drop app</h1>     

<ul>

{
list.map((val, ind) => 

<li className="listStyle" key={ind}>
  
  <div draggable onDragStart={(e) => onDragHandle(e, ind)}
  onDragOver={(e) => onDragOverHandle(e, ind)}>{val}</div>
  
  </li>
)
}

</ul>



      </header>
    </div>
  );
}

export default App;
