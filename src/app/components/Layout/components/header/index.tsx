import React from 'react';
import styles from './Header.module.scss';
import className from 'classnames/bind';
import image from '@/assets/images';
import { Cancel, Search } from '@mui/icons-material';
import ClipLoader from "react-spinners/ClipLoader";

const cx = className.bind(styles);

function Header() {
  return (
    <header className={cx('wrapper')}>
      <div className={cx('inner')}>
        <div className={cx('logo')}>
          <img src={image.logo} alt="tiktok" />
        </div>
        <div className={cx('search')}>
          <input placeholder="Search accounts and videos" spellCheck={false} />
          <button className={cx('clear')}>
            <Cancel sx={{fontSize: '16px'}}/>
          </button>
          <div className={cx('loading')}>
          <ClipLoader color="grey" loading={true} size={14} />
          </div>
          <button className={cx('search-btn')}>
            <Search sx={{fontSize: '3rem', color: ''}}/>
          </button>
        </div>
        <div className={cx('action')}>

        </div>
      </div>
    </header>
  );
}

export default Header;
