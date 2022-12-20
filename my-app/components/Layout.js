import React from 'react'
import Headers from './Headers'
import Footer from './Footer'
import Head from 'next/head'

const Layout = ({children,title}) => {
  return (
    <div>
           <Head>
        <title>{title}</title>
        <link rel="stylesheet" href="	https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Headers/>
      {children}
      <Footer/>
    </div>
  )
}

export default Layout
