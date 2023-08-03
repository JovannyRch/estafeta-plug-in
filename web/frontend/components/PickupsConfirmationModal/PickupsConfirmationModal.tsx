import React, { useEffect } from "react";
import { styled } from "styled-components";
import ConfirmationModal from "../ConfirmationModal/ConfirmationModal";
import useLocalStorage from "../../hooks/useLocalStorage";
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
  localKey?: string;
}

const PickupsConfirmationModal = ({
  localKey,
  isOpen,
  onClose,
  onOk,
}: Props) => {
  const [localValue, setLocalValue] = useLocalStorage<boolean>(
    localKey ?? "",
    false
  );

  const handleOnOk = () => {
    const checkbox = document.getElementById(
      "pickups-confirmation-modal"
    ) as HTMLInputElement;
    if (checkbox.checked) {
      setLocalValue(true);
    }

    onOk?.();
    onClose?.();
  };

  useEffect(() => {
    if (isOpen && localValue) {
      onOk?.();
      onClose?.();
    }
  }, [isOpen, localValue]);

  if (localValue) {
    return null;
  }

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
        <br />
        <div>
          <input type="checkbox" id="pickups-confirmation-modal" />
          <label> No volver a mostrar este mensaje</label>
        </div>
      </ModalMessage>
    </ConfirmationModal>
  );
};

export default PickupsConfirmationModal;
