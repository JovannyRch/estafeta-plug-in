import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import Button from '../Button/Button';

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
`;

const ModalContainer = styled.div`
  background: white;
  padding: 20px;
  border-radius: 8px;
  width: 614px;
  height: 288px;
  max-width: 100%;
  padding: 40px 0;
  display: flex;
  flex-direction: column;
  border-radius: 20px;
  background: var(--backgrounds-y-tipo-btns, #FFF);
`;

const ModalBody = styled.div`
  flex: 1;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalHeader = styled.h2`
  margin-top: 0;
`;

const ModalActions = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  gap: 50px;
`;



const ConfirmationModal = ({
  isOpen,
  handleClose,
  title = "",
  children,
  confirmText = 'Ok',
  cancelText = 'Cancelar',
  handleConfirm
}) => {

  const ref = useRef(null);
  const handleOverlayClick = (e) => {
    if (ref.current && !ref.current.contains(e.target) && isOpen) {
      handleClose();
    }
  };



  useEffect(() => {
    if (!isOpen) {
      document.removeEventListener('click', handleOverlayClick);
      return;
    }

    document.addEventListener('click', handleOverlayClick);
    return () => {
      document.removeEventListener('click', handleOverlayClick);
    };
  }, [isOpen]);

  if (!isOpen) {
    return null;
  }


  return (
    <ModalOverlay>
      <ModalContainer ref={ref}>
        {
          title && <ModalHeader>{title}</ModalHeader>
        }
        <ModalBody>
          {children}
        </ModalBody>
        <ModalActions>
          <Button type="secondary" onClick={handleClose}>{cancelText}</Button>
          <Button type="primary" onClick={handleConfirm}>{confirmText}</Button>
        </ModalActions>
      </ModalContainer>
    </ModalOverlay>
  );
};

export default ConfirmationModal;
