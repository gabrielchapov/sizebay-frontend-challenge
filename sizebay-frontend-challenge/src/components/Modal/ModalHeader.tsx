import styled from 'styled-components'

export const ModalHeader = () => {
  return (
    <ModalHeaderWrapper>
      <h1>Modal Header</h1>
    </ModalHeaderWrapper>
  )
}

const ModalHeaderWrapper = styled.div`
font-weight: 'bold';
`