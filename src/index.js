import { createRoot } from 'react-dom/client';
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter as Router } from 'react-router-dom';



// Call make Server
makeServer();



const container = document.getElementById('root');
const root = createRoot(container);
root.render(
   <Router><App tab="home" /></Router> );
