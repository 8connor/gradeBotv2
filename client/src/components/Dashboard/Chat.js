// import React, { useEffect, useState } from "react";
// import socketIOClient from "socket.io-client"
// const ENDPOINT = "http://localhost:3001"

// function Chat(){
//     const [response, setResponse] = useState()

//     useEffect(()=>{
//         const socket = socketIOClient(ENDPOINT);
//         socket.on("FromAPI", data =>{
//             setResponse(data)
//         })
//     }, [])

//     return(
//         <div>
//             <p>Chat {response}</p>
//         </div>
//     )
// }

// export default Chat;