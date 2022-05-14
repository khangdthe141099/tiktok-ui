import React, { useState, useEffect } from 'react';
import styles from './Header.module.scss';
import className from 'classnames/bind';
import 'tippy.js/dist/tippy.css';
import image from '@/assets/images';
import {
  Cancel,
  Search,
  MoreVert,
  Language,
  HelpOutline,
  KeyboardAltOutlined,
  CloudUploadOutlined,
  MessageOutlined,
  MailOutlined,
  AccountCircleOutlined,
  AttachMoneyOutlined,
  SettingsOutlined,
  LogoutOutlined
} from '@mui/icons-material';
import ClipLoader from 'react-spinners/ClipLoader';
import TippyHeadless from '@tippyjs/react/headless';
import Tippy from '@tippyjs/react';
import { Wrapper as PopperWrapper } from '@/app/components/Popper';
import AccountItem from '@/app/components/AccountItem';
import Button from '@/app/components/Button';
import Menu from '@/app/components/Popper/Menu';

const cx = className.bind(styles);

const MENU_ITEMS = [
  {
    icon: <Language sx={{ fontSize: '20px' }} />,
    title: 'English',
    children: {
      title: 'Language',
      data: [
        {
          type: 'language',
          code: 'en',
          title: 'English',
        },
        {
          type: 'language',
          code: 'vi',
          title: 'Tiếng Việt',
        },
      ],
    },
  },
  {
    icon: <HelpOutline sx={{ fontSize: '20px' }} />,
    title: 'Feedback and help',
    to: '/feedback',
  },
  {
    icon: <KeyboardAltOutlined sx={{ fontSize: '18px' }} />,
    title: 'Keyboard shortcuts',
  },
];

function Header() {
  const [searchResult, setSearchResult] = useState<any>([]);

  //Handle logic:
  const handleMenuChange = (menuItem: any) => {
    console.log(menuItem);
  };

  const currentUser = true;

  const userMenu = [
    {
      icon: <AccountCircleOutlined sx={{ fontSize: '20px' }} />,
      title: 'View profile',
      to: '/profile',
    },
    {
      icon: <AttachMoneyOutlined sx={{ fontSize: '20px' }} />,
      title: 'Get Coin',
      to: '/coin',
    },
    {
      icon: <SettingsOutlined sx={{ fontSize: '20px' }} />,
      title: 'Settings',
      to: '/settings',
    },
    ...MENU_ITEMS,
    {
      icon: <LogoutOutlined sx={{ fontSize: '20px' }} />,
      title: 'Log out',
      to: '/logout',
      separate: true
    },
  ]

  return (
    <header className={cx('wrapper')}>
      <div className={cx('inner')}>
        <div className={cx('logo')}>
          <img src={image.logo} alt="tiktok" />
        </div>
        <TippyHeadless
          interactive
          visible={searchResult.length > 0}
          render={attrs => (
            <div className={cx('search-result')} tabIndex={-1} {...attrs}>
              <PopperWrapper>
                <h4 className={cx('search-title')}>Account</h4>
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
        </TippyHeadless>

        <div className={cx('actions')}>
          {currentUser ? (
            <>
              <Tippy content={'Upload video'}>
                <button className={cx('action-btn')}>
                  <CloudUploadOutlined sx={{ fontSize: '30px' }} />
                </button>
              </Tippy>
              <Tippy content={'Message'}>
                <button className={cx('action-btn')}>
                  <MessageOutlined sx={{ fontSize: '30px' }} />
                </button>
              </Tippy>
              <Tippy content={'Inbox'}>
                <button className={cx('action-btn')}>
                  <MailOutlined sx={{ fontSize: '30px' }} />
                </button>
              </Tippy>
            </>
          ) : (
            <>
              <Button
                text
                onClick={() => alert('hi')}
                to={undefined}
                href={undefined}
                className={undefined}
                leftIcon={undefined}
                rightIcon={undefined}
              >
                Upload
              </Button>
              <Button
                primary
                onClick={() => alert('hi')}
                to={undefined}
                href={undefined}
                className={undefined}
                leftIcon={undefined}
                rightIcon={undefined}
              >
                Login
              </Button>
            </>
          )}

          <Menu items={userMenu} onChange={handleMenuChange}>
            {currentUser ? (
              <img
                className={cx('user-avatar')}
                src="https://upload.wikimedia.org/wikipedia/vi/thumb/1/1d/Manchester_City_FC_logo.svg/1200px-Manchester_City_FC_logo.svg.png"
                alt="Dam Tuan Khang"
              />
            ) : (
              <button className={cx('more-btn')}>
                <MoreVert sx={{ fontSize: '2.5rem' }} />
              </button>
            )}
          </Menu>
        </div>
      </div>
    </header>
  );
}

export default Header;
