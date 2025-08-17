import { useEffect, useState } from 'react'
import './App.css'
function App() {
  const [socket, setSocket] = useState <WebSocket | null>(null);
  function sendMessage() {
    if (!socket) {
      return;
  }
  //@ts-ignore
  socket.send("ping")
}
  useEffect(() => {
    const ws = new WebSocket('ws://localhost:8000/ws');
    setSocket(ws);
    
    // ws.onopen = () => {
    //   console.log('WebSocket connection established');
    // }; 
    ws.onmessage = (event) => {
      alert( event.data);
    };
    // ws.onclose = () => {
    //   console.log('WebSocket connection closed');
    // };
    
    // ws.onerror = (error) => {
    //   console.error('WebSocket error:', error);
    // };
    
    return () => {
      ws.close();
    };

  }, [])
  
  return (
    <div>
      <input type="text" placeholder="Type something..." ></input>
      <button onClick={sendMessage}>Click Me!</button>
    </div>    
    
  )
}

export default App
