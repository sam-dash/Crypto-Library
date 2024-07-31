import AppLayout from './components/layout/AppLayout'
import { CryptoContextProvider } from './context/crypto-сontext'

export default function App() {
  return (
    <CryptoContextProvider>
      <AppLayout />
    </CryptoContextProvider>
  )
}