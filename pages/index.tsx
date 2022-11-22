import { Button, Layout, Tabs } from 'antd'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/home.module.scss'

export default function Home() {
  return (
    <Layout className='home-layout'>
      <Tabs>
        <Tabs.TabPane></Tabs.TabPane>

      </Tabs>
    </Layout>
  )
}
