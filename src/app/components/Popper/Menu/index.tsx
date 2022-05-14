import React, { useState } from 'react'
import Tippy from '@tippyjs/react/headless';
import styles from './Menu.module.scss';
import className from 'classnames/bind';
import { Wrapper as PopperWrapper } from '@/app/components/Popper';
import MenuItem from '@/app/components/Popper/Menu/MenuItem'
import Header from './Header'

const cx = className.bind(styles);

interface initProps {
    children: any,
    items: any[],
    onChange?: any
}

function Menu(props: initProps) {

  const { children, items, onChange } = props;

  const [history, setHistory] = useState([{ data: items }])

  const current = history[history.length - 1]

    //Function to render list item in popper menu:
  const renderItems = () => {
    return current.data.map((item: any, index: number) => {
      const isParent = !!item.children
      return (
        <MenuItem key={index} data={item} onClick={() => {
          if(isParent) {
            setHistory(prev => [...prev, item.children])
          }else {
            onChange(item)
          }
        }}/>
      )
    })
  }

  const handleBack = () => {
    //remove 1 item from arr:
    setHistory(prev => prev.slice(0, prev.length - 1))
  }

  return (
    <Tippy
          interactive
          delay={[0, 500]}
          placement='bottom-end'
          offset={[12, 8]}
          render={attrs => (
            <div className={cx('menu-list')} tabIndex={-1} {...attrs}>
              <PopperWrapper className={cx('menu-popper')}>
                { history.length > 1 && <Header title={'Language'} onBack={handleBack}/> }
                {renderItems()}
              </PopperWrapper>
            </div>
          )}
          //Xóa phần tử cuối mảng để chỉ hiển thị phần tử đầu tiên khi ẩn popper:
          onHide={() => setHistory(prev => prev.slice(0, 1))}
        >
        { children }
        </Tippy>
  )
}

export default Menu