import React, { useState, useEffect} from 'react';
import styles from './Header.module.scss';
import className from 'classnames/bind';
import image from '@/assets/images';
import { Cancel, Search } from '@mui/icons-material';
import ClipLoader from 'react-spinners/ClipLoader';
import Tippy from '@tippyjs/react/headless';
import { Wrapper as PopperWrapper } from '@/app/components/Layout/Popper' 
import AccountItem from '@/app/components/AccountItem'

const cx = className.bind(styles);

function Header() {
  const [searchResult, setSearchResult] = useState<any>([])

  // useEffect(() => {
  //   setTimeout(() => {
  //       setSearchResult([1, 2, 3])
  //   }, 0)
  // })

  return (
    <header className={cx('wrapper')}>
      <div className={cx('inner')}>
        <div className={cx('logo')}>
          <img src={image.logo} alt="tiktok" />
        </div>
        <Tippy
          interactive
          visible={searchResult.length > 0}
          render={attrs => (
            <div className={cx('search-result')} tabIndex={-1}  {...attrs}>
              <PopperWrapper>
              <h4 className={cx('search-title')}>
                Account
              </h4>
              <AccountItem />
              <AccountItem />
              <AccountItem />
              <AccountItem />
              </PopperWrapper>
            </div>
          )}
        >
          <div className={cx('search')}>
            <input
              placeholder="Search accounts and videos"
              spellCheck={false}
            />
            <button className={cx('clear')}>
              <Cancel sx={{ fontSize: '16px' }} />
            </button>
            <div className={cx('loading')}>
              <ClipLoader color="grey" loading={true} size={14} />
            </div>
            <button className={cx('search-btn')}>
              <Search sx={{ fontSize: '3rem', color: '' }} />
            </button>
          </div>
        </Tippy>
        <div className={cx('action')}></div>
      </div>
    </header>
  );
}

export default Header;
