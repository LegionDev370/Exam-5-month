import * as React from 'react';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import { useSelector } from 'react-redux';
export default function LinearProgressFunc() {
  const linearProgress = useSelector(store => store.Linear)
  if(!linearProgress.linear){
    return null;
  }
  return (
    <Box sx={{ width: '100%' }}>
      <LinearProgress />
    </Box>
  );
}