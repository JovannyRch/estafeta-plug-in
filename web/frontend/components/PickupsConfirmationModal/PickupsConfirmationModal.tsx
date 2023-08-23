import React from "react";
import { styled } from "styled-components";
import ConfirmationModal from "../ConfirmationModal/ConfirmationModal";

const ModalMessage = styled.p`
  color: var(--tipografa, #12263c);
  text-align: center;
  font-family: Montserrat;
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  max-width: 447px;
`;

interface Props {
  isOpen: boolean;
  onClose?: () => void;
  onOk?: () => void;
}

const PickupsConfirmationModal = ({
  isOpen,
  onClose,
  onOk,
}: Props) => {


  const handleOnOk = () => {
    onOk?.();
    onClose?.();
  };


  return (
    <ConfirmationModal
      isOpen={isOpen}
      handleClose={() => onClose?.()}
      confirmText="Continuar"
      handleConfirm={handleOnOk}
    >
      <ModalMessage>
        Estás en Estafeta Plug In - Consultas.
        <br />
        <br />
        Para poder solicitar recolecciones, debes hacerlo desde el
        Administrador.
        <br />
        <br />
        ¿Deseas ser direccionado?
        <br />
      
      </ModalMessage>
    </ConfirmationModal>
  );
};

export default PickupsConfirmationModal;
