import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import { ConfigProvider, theme } from 'antd'

const { darkAlgorithm, compactAlgorithm }= theme;

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ConfigProvider theme={{
      algorithm: [darkAlgorithm, compactAlgorithm],
      token: {
        colorPrimary: "#f00"
      }
    }}>
      <Component {...pageProps} />
    </ConfigProvider> 
  )
}
