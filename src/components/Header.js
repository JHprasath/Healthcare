import React from 'react';
import  {sidebarContent } from '../data/sidebar';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './styles/Header.css'
const Header = () => {
  const generalHeader = sidebarContent.general
  const generalHeader1 = sidebarContent.Tools
  const generalHeader2 = sidebarContent.settings
  return (
    <div>
    <div className='overall'>
      <nav>
        <div className='container-1'>
        <h1>Health<span>care.</span></h1>
        <div>
      <p>General</p>
        {generalHeader.map((item, index) => (
          <div className='generalheader'>
          <a key={index} href={item.path}>
            <div className='content'>
            <i className={item.icon}></i>
            <span>{item.name}</span>
            </div>
          </a>
          </div>
        ))}
        </div>
        <div>
      <p>Tools</p>
        {generalHeader1.map((item, index) => (
          <div className='generalheader'>
          <a key={index} href={item.path}>
          <div className='content'>
            <i className={item.icon}></i>
            <span>{item.name}</span>
            </div>
          </a>
          </div>
        ))}
        </div>
        <div>
      
        {generalHeader2.map((item, index) => (
          <div className='generalheader'>
          <a key={index} href={item.path}>
          <div className='content'>
            <i className={item.icon}></i>
            <span>{item.name}</span>
            </div>
          </a>
          </div>
        ))}
        </div>
        </div>
      </nav>
    </div>
    <div className='overall1'>
     <div className='mobile-device'>
     <div className='mobile-device-header'><h2>Health<span>care.</span></h2></div>
     <div><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-card-list" viewBox="0 0 16 16">
<path d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2z"/>
<path d="M5 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 5 8m0-2.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5m0 5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5m-1-5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0M4 8a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0m0 2.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0"/>
</svg></div>
   </div>
   </div>
   </div>
  );
};

export default Header;



