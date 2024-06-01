import { useState } from "react";

const courses = [
  {
    id: 1,
    name: "React",
  },
  {
    id: 2,
    name: "Vue",
  },
  {
    id: 3,
    name: "Angular",
  },
];

function App() {
  const [checked, setChecked] = useState([]);
  console.log(checked);

  const handleChecked = (id) => {
    const isChecked = checked.includes(id);
    setChecked(prev => {
      if(isChecked) {
        return checked.filter(item  => item !== id);
      } else {
        return [...prev, id];
      }
    });
  }

  const handleSubmit = () => {
    console.log({id: checked});
  }
  return (
    <div className="App" style={{ padding: 20 }}>
      {courses.map(course => (
        <div key={course.id}>
          <input type="checkbox" checked={checked.includes(course.id)}  onChange={() => handleChecked(course.id)}/> {course.name}
        </div>
      ))}
   
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default App;
