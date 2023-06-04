import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";


//import { createRoot } from "react-dom/client";

//import { BrowserRouter } from 'react-router-dom';
import App from './App';


// const root = createRoot(document.getElementById("root"));
// root.render(
//     <BrowserRouter>
//         <App />


//     </BrowserRouter>
// );

//ReactDOM.render(<App />, document.getElementById('root'));

ReactDOM.render(
    <React.StrictMode>
        <Router>
            <App />
        </Router>

    </React.StrictMode>,
    document.getElementById('root')
);



