import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {}, []);

  function SignIn(e) {
    e.preventDefault();

    axios
      .post("http://127.0.0.1:5000/post", { name: name, id: id })
      .then((Response) => {
        console.log(Response.data);
      })
      .catch((error) => {
        if (error.response) {
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        } else if (error.request) {
          console.log(error.request);
        } else {
          console.log("Error", error.message);
        }
        console.log(error.config);
      });

    // axios
    //   .get("http://127.0.0.1:5000/")
    //   .then((response) => {
    //     // setData(response.data);
    //     console.log(response.data);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
  }
  return (
    <>
      <form onSubmit={(e) => SignIn(e)}>
        <label>enrollment</label>
        <input
          id="id"
          type="text"
          value={id}
          onChange={(e) => setId(e.target.value)}
        />
        <label>name</label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        ></input>
        <label>password</label>
        <input
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        <button type="submit">submit</button>
      </form>
      {data.map((item) => (
        <div key={item.id}>
          <h2>{item.title}</h2>
          <p>{item.body}</p>
        </div>
      ))}
    </>
  );
}

export default App;

// import logo from "./logo.svg";
// import "./App.css";
// import { useEffect, useState } from "react";
// import axios from "axios";

// function App() {
//   const [name, setName] = useState("");
//   const [id, setId] = useState("");
// useEffect(() => {
//   axios
//     .get("http://127.0.0.1:5000/")
//     .then((response) => {
//       setData(response.data);
//       console.log(response.data);
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// }, []);

//   function SignIn(e) {
//     e.preventDefault();
//     setName(e.target.value.name);
//     setId(e.target.value.id);

//     axios
//       .post("http://127.0.0.1:5000/post", { name: name, id: id })
//       .then((Response) => {
//         console.log(Response);
//       });
//   }
//   return (
//     <form onSubmit={(e) => SignIn(e)}>
//       <label>enrollment</label>
//       <input
//         id="number"
//         type="text"
//         value={id}
//         // onChange={(e) => setId(e.target.value)}
//       />
//       <label>name</label>
//       <input
//         id="name"
//         type="text"
//         value={name}
//         // onChange={(e) => setName(e.target.value)}
//       ></input>
//       <button type="submit">submit</button>
//       {/* {data.map((item) => (
//         <div key={item.id}>
//           <h2>{item.title}</h2>
//           <p>{item.body}</p>
//         </div>
//       ))} */}
//     </form>
//   );
// }

// export default App;
