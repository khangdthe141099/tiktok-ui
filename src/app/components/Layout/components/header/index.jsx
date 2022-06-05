import React, { useState } from 'react';
import styles from './Header.module.scss';
import className from 'classnames/bind';
import 'tippy.js/dist/tippy.css';
import image from '@/assets/images';
import {
  MoreVert,
  Language,
  HelpOutline,
  KeyboardAltOutlined,
  AccountCircleOutlined,
  AttachMoneyOutlined,
  SettingsOutlined,
  LogoutOutlined
} from '@mui/icons-material';
import Tippy from '@tippyjs/react';
import Button from '@/app/components/Button';
import Menu from '@/app/components/Popper/Menu';
import { UploadIcon, MessageIcon, InboxIcon } from '@/app/components/Icons'
import Image from '@/app/components/Image';
import Search from '@/app/components/Layout/components/search'

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
  const currentUser = true;

  //Handle logic:
  const handleMenuChange = (menuItem) => {
    console.log(menuItem);
  };

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
          <Image src={image.logo} alt="tiktok" />
        </div>
        
        {/* Search */}
        <Search />

        <div className={cx('actions')}>
          {currentUser ? (
            <>
              <Tippy content={'Upload video'}>
                <button className={cx('action-btn')}>
                  <UploadIcon className={undefined} />
                </button>
              </Tippy>
              <Tippy content={'Message'}>
                <button className={cx('action-btn')}>
                  <MessageIcon className={undefined}/>
                </button>
              </Tippy>
              <Tippy content={'Inbox'}>
                <button className={cx('action-btn')}>
                  <InboxIcon className={undefined}/>
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
              <Image
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
