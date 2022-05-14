import React from 'react'
import Tippy from '@tippyjs/react/headless';
import styles from './Menu.module.scss';
import className from 'classnames/bind';
import { Wrapper as PopperWrapper } from '@/app/components/Popper';
import MenuItem from '@/app/components/Popper/Menu/MenuItem'

const cx = className.bind(styles);

interface initProps {
    children: any,
    items: any[]
}

function Menu(props: initProps) {

    //Function to render list item in popper menu:
  const renderItems = () => {
    return props.items.map((item: any, index: number) => (
           <MenuItem key={index} data={item}/>
    ))
  }

  return (
    <Tippy
          interactive
          delay={[0, 500]}
          placement='bottom-end'
          render={attrs => (
            <div className={cx('menu-list')} tabIndex={-1} {...attrs}>
              <PopperWrapper className={cx('menu-popper')}>
                {renderItems()}
              </PopperWrapper>
            </div>
          )}
        >
        { props.children }
        </Tippy>
  )
}

export default Menu