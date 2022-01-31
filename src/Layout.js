import React from 'react';
import Header from  "./components/Header";
import Sidebar from "./components/Sidebar";
import Feed from "./components/Feed";
import Widgets from "./components/Widgets";

function Layout() {
  return <div id="layout">
           <Header />
           <div className="app__body">
            <Sidebar />
            <Feed />
            <Widgets />
           </div>
           
  </div>;
}

export default Layout;
