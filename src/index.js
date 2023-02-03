import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import LoginComponent from './components/LoginComponent';
import RegistrationComponent from './components/RegistrationComponent';
import TagsComponent from './components/TagsComponent';
import RegistrationUploaderComponent from './components/RegistrationUploaderComponent';
import FeedComponent from './components/FeedComponent';
import PostTagComponent from './components/PostTagComponent';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Router>
      <Routes>
        <Route path="/" element={<App />}></Route>
        <Route path="/login.htm" element={<LoginComponent />}></Route> 
        <Route path="/register.htm" element={<RegistrationComponent />}></Route>
        <Route path="/tags.htm" element={<TagsComponent />}></Route>
        <Route path="/uploadPic.htm" element={<RegistrationUploaderComponent />}></Route>
        <Route path="/feed.htm" element={<FeedComponent />}></Route>
        <Route path="/test.htm" element={<PostTagComponent />}></Route>
      </Routes>
      <App />
    </Router>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
