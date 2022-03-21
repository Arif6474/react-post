
import { useEffect, useState } from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <LoadPost></LoadPost>

      {/* <District></District> */}
    </div>
  );
}
function LoadPost (){
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => setPosts(data))
  }, [])

  return (
    <div>
      <h2> Post: {posts.length} </h2>
      {
        posts.map(post => <Post id = {post.id} title = {post.title} body = {post.body}></Post>)
      }
    </div>  
  )
  function Post (props){
    return (
      <div className="post">
        <h3>Title: {props.title}</h3>
        <h4>Id: {props.id}</h4>
        <p>Body: {props.body}</p>
        
      </div>
    )

  }
}











/* function District(){
  const [power, setPower] = useState(1);
  const boostPower =() => {
    const newPower = power *2 ;
    setPower(newPower);
  }
 

  return (
    <div>
      <h2>power: {power}</h2>
      <button onClick={boostPower}>Boot the power</button>
    </div>
  )
} */

export default App;
