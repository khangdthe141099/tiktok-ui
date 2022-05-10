import React from 'react';
import Header from '../components/header';
import Sidebar from './sidebar';
import styles from './DefaultLayout.module.scss';
import className from 'classnames/bind'

const cx = className.bind(styles)

function DefaultLayout(props: { children: any }) {
  return (
    <div className={cx('wrapper')}>
      <Header />
      <div className={cx('container')}>
        <Sidebar />
        <div className={cx('content')}>
          {props.children}
        </div>
      </div>
    </div>
  );
}

export default DefaultLayout;
