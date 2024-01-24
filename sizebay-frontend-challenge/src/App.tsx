import './App.css'
import styled from 'styled-components'
import { ModalHeader } from './components/Modal/ModalHeader'

function App() {

  return (
   <ModalWrapper>
    <ModalHeader />
   </ModalWrapper>
  )
}

const ModalWrapper = styled.div`
max-width: 800px;
max-height: 650px;
background-color: #fff;
border-radius: 4px;
opacity: 1;
`

export default App
