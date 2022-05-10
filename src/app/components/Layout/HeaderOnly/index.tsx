import React from 'react'
import Header from '@/app/components/Layout/components/header'

function HeaderOnly(props: { children: any }) {
  return (
    <div>
        <Header />
        <div className="container">
            <div className="content">
                {props.children}
            </div>
        </div>
    </div>
  )
}

export default HeaderOnly