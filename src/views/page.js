import React from 'react'
import Helmet from 'react-helmet'

import AppComponent from '../components/component'
import styles from './page.module.css'

const Page = (props) => {
  return (
    <div className={styles.page}>
      <Helmet>
        <title>mIqFmtmoDs</title>
      </Helmet>
      <AppComponent src="g"></AppComponent>
    </div>
  )
}

export default Page
