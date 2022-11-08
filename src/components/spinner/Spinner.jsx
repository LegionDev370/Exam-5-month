import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import { useSelector } from 'react-redux';
export default function Spinner() {
  const setSpinner = useSelector(store => store.Spinner)
  if(!setSpinner.spinner){
    return null;
  }
  return (
    <div>
    <Backdrop
      sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open
    >
      <CircularProgress color="inherit" />
    </Backdrop>
  </div>
  );
}