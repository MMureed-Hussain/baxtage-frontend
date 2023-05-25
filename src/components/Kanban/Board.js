import { Box } from '@mui/material';
import { DragDropContext } from 'react-beautiful-dnd';

const Board = (props) => {
  return (
    <DragDropContext>
      <Box sx={{ ...props.sx, width: 1, overflowX: 'auto', display: 'flex', flexWrap: 'nowrap' }} {...props} />
    </DragDropContext>
  );
};

export default Board;
