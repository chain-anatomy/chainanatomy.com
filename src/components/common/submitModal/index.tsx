import { useEffect } from "react";
import { Modal } from "@mui/material";

import * as S from "./style";

interface Props {
  open: boolean;
  handleClose: VoidFunction;
}

const SubmitModal: React.FC<Props> = ({ open, handleClose }) => {
  useEffect(() => {
    open && setTimeout(() => handleClose(), 3000);
  }, [open]);

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <S.ModalTextCtnr>
        <S.ModalText id="modal-modal-title">
          Thank you for getting in touch!
        </S.ModalText>
      </S.ModalTextCtnr>
    </Modal>
  );
};

export default SubmitModal;
