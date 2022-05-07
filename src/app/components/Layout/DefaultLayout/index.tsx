import React from 'react';
import Header from '../components/header';
import Sidebar from './sidebar';

function DefaultLayout(props: { children: any }) {
  return (
    <div>
      <Header />
      <div className="container">
        <Sidebar />
        <div className="content">
          {props.children}
        </div>
      </div>
    </div>
  );
}

export default DefaultLayout;
