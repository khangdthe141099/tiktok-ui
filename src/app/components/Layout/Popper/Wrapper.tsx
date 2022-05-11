import React from 'react'
import styles from './Popper.module.scss';
import className from 'classnames/bind';

const cx = className.bind(styles);

function Wrapper(props: {children : any}) {
  return (
    <div className={cx('wrapper')}>
        {props.children}
    </div>
  )
}

export default Wrapper