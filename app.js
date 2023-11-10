/*
Header component 

        logo
        NavBar(home,aboutus,contact,car)

Body component

    searchbar
    resturant card

footer Component
    copyright
*/
import React from "react";
import ReactDOM from "react-dom";
import "./app.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

const Header = () => {
   return(
    <div>
        <img src="https://www.cnet.com/a/img/resize/fdd8758decab93982f89777da0289fc2f4c76876/hub/2022/05/24/9879e313-8e97-4858-abe0-ff3583b11495/imagen-text-to-image-ai-composites-2022-promo.jpg?auto=webp&fit=crop&height=1200&width=1200"/>
       
       <ul>
        <li>home</li>
        <li>About us</li>
        <li>Contact</li>
       </ul>
       
        </div>
   ); 
};
function App (){
    return( 
    <div>
    <Header />
    <h1>App component</h1>
</div>
);
}

root.render(<App />);