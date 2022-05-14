import React from 'react'
import styles from './Menu.module.scss';
import className from 'classnames/bind';
import { KeyboardArrowLeftOutlined } from '@mui/icons-material';

const cx = className.bind(styles);

interface initProps {
    title: string,
    onBack: any;
}

function Header(props: initProps) {

    const { title, onBack } = props;

  return (
    <header className={cx('header')}>
        <button className={cx('back-btn')} onClick={onBack}>
            <KeyboardArrowLeftOutlined sx={{fontSize: '30px'}}/>
        </button>
        <h4 className={cx('title')}>{title}</h4>
    </header>
  )
}

export default Header