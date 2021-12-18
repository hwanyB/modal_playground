import React from 'react'
import styled from '@emotion/styled/macro';
import Portal from './Portal';

const Overlay = styled.div`

`;
const Dim = styled.div`

`;
const Container = styled.div`

`;

interface Props {
    isOpen: boolean;
    onClose: () => void;
    selector?: string;
}

const Modal: React.FC<Props> = ({ children, isOpen, onClose, selector }) => {
    return (
        <Portal selector={selector}>
        <Overlay>
            <Dim onClick={onClose} />
            <Container>{children}</Container>
        </Overlay>
        </Portal>
    )
}

export default Modal