import { Card, CardContent } from '@mui/material';
import { Draggable } from 'react-beautiful-dnd';

const BoardRow = ({ children, id }) => {
  return (
    <Draggable draggableId={id} index={parseInt(id, 10)} key={id}>
      {(provided, snapshot) => (
        <Card
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          sx={{ mb: 1, borderRadius: '8px' }}
        >
          <CardContent>{children}</CardContent>
        </Card>
      )}
    </Draggable>
  );
};

export default BoardRow;
