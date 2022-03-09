import './App.css';
import React from 'react'; //import React
import imageSrc from "./imageInSrc.jpg";
import "./styles.css";



function App() {

// let a = (1>2)?(""||"hello"):(0||2);
// console.log(a);

// let user = {
//   firstName : "John",
//   LastName: "Smith"
// };
// let photoPath = user.ProfilePath || "/images/img.png";
// console.log(photoPath);

  return (
    <div>

      <div style={{border:"solid 1px black",maxWidth:"100vw", backgroundColor:"orange"}}>
      <h1 className="title red">Snowy & Smokey</h1>
      <br/>
      <img src={imageSrc} className="container" alt="imageInSrc"/>
      <br/>
      <img src={"/imageInPublic.jpg"} className="container" alt="imageInPublic"/>
      </div>
      <video width="320" height="240" className="containerV"controls loop autoPlay muted>
        <source src="myVideo.mp4" type="video/mp4"/>
        
      </video> 
      <br/>
      <img
      src={"https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350"}
      className="container"
      />

    </div>
  );
}

export default App;
