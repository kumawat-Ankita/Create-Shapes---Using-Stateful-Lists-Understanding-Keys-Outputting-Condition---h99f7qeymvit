import React from 'react'
import '../styles/App.css';
const App = () => {const [selectedShape, setSelectedShape] = useState('Square');
  const [shapes, setShapes] = useState([]);

  const handleShapeChange = (event) => {
    setSelectedShape(event.target.value);
  };

  const handleAddShape = () => {
    const shapeId = shapes.length + 1;

    const newShape = {
      id: shapeId,
      type: selectedShape,
    };

    setShapes([...shapes, newShape]);
  };

  

  return (
    <div id="main">
      <div id="shape-creator">
         <select value={selectedShape} onChange={handleShapeChange}>
            <option value="Square">Square</option>
            <option value="Circle">Circle</option>
         </select>
        <button onClick={handleAddShape}>Add Shape</button>
      </div>
       <div id="shapes-holder">
        {shapes.map((shape) => (
          <div key={shape.id} className={shape.type.toLowerCase()}>{shape.type}</div>
        ))}
      </div>
    </div>
  )
}


export default App;
