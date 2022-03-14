import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios'
import PostLists from './components/PostLists';

function App() {
  const [value, setvalue] = useState(0)
  
  const handleclick = (e) => {
    console.log(value);
    setvalue(value+1)
  }
  // useEffect(() => {
  //   console.log('Hello Effect')
  // }, [])

  const [post, setpost] = useState([])
  useEffect(() => {
    backendPost()
  }, [])  
  
  const url = 'http://localhost:1234/posts/'
  const backendPost = () => {
    axios.get(url).then((res) => {
      console.log(res)
      console.log(res.data)
      setpost(res.data)
    }).catch(err =>console.log(err)).then(() => {console.log('This will always run Regardless')})
  }
  
  return (
    <div className="App">
      <div>Hello World</div>
      <p>{value}</p>

      <input type='button' onClick={handleclick} value='Click Me' />
      {/* <button onClick={(e) => {setvalue(value+1)}}>Click Me</button> */}
      <hr />
      <hr />
      <PostLists postlist={post} />
    </div>
  );
}

export default App;
