import React from "react";
import ReactDOM from "react-dom";
// react.create elemment is create just element for id given in root it render only with creating an objects with details
// ReactElement===>JS object====>Html
        const header = React.createElement("h1",{id:1},'hello world reac');
        // JSX---->HTML like syntax
        // bable(present in parcel (is bundler)) ---.js compiler convert--->jsx--->react---->jsobj--->html
        const jsxhead =<h1>hellow world using react</h1>;



// // bable understand when this it is in multiline
//         const Headercomponent = (
//                 <div>
//                  <h1 id="1">hellow component</h1>
//                 </div>
//         );

//         const compu = () => {
//                  return <h1>hellowwwwww</h1>; 
//                  };
//         // console.log("header",jsxhead)
//         const root1=ReactDOM.createRoot(document.getElementById("root"));
//         root1.render(<compu/>);
//         // root1.render(jsxhead);

//         console.log("learning react")