// import React,{useState} from 'react';
// import axios from 'axios'
// const AddTask = () => {
//     const [title, setTitle] = useState("")

//     const handleSubmit = async(e) => {
//         e.preventDefault();
//         if(!title.trim()) return

//         await axios.post('http://localhost:5000/api/tasks',{title})
//         setTitle("")
        
//     }
//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <input
//         type='text'
//         placeholder='Enter new task...'
//         value={title}
//         onChange={(e)=> setTitle(e.target.value)}

//         />
//         <button type='submit'> Add </button> 
//       </form>
//     </div>
//   );
// }

// export default AddTask;

import React,{useState} from 'react';
import axios from 'axios';

const AddTask = () => {
  const [title, setTitle] = useState("")

  const handleSubmit = async(e) => {
    e.preventDefault()
    if(!title.trim()) return
    await axios.post('http://localhost:5000/api/tasks',{title})
    setTitle("")
  }

  return (
   <form onSubmit={handleSubmit}>
    <input
    type='text'
    placeholder='Enter New Task...'
    value={title}
    onChange={(e)=>setTitle(e.target.value)}
    style={{}}
    />
    <button>Add</button>
    </form>
  );
}

export default AddTask;
