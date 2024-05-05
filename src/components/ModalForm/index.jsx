import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import FormLocal from '../FormLocal';
import FormUsuario from '../FormUsuario';
import "./style.css"


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function ModalForm({form, dado, acao, id}) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}><img src="./src/assets/editar.png" alt="" /></Button>
      <Modal
        className='customModal'
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          { 
            form==="usuario"? <FormUsuario acao={acao} usuario={dado} id={id} /> : <FormLocal acao={acao} local={dado} id={id}/>
          }
        </Box>
      </Modal>
    </div>
  );
}
