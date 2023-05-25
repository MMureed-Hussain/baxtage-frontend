import { Card, CardContent, Typography } from '@mui/material';
import { Droppable } from 'react-beautiful-dnd';

const BoardColumn = ({ children, borderColor, label }) => {
  return (
    <Card sx={{ minWidth: 200, mr: 2, backgroundColor: '#f5f5f5', border: '1px solid #919eab52' }}>
      {label && (
        <Typography
          sx={{
            p: 2,
            pb: 1,
            borderBottom: `2px solid ${borderColor}`,
            backgroundColor: '#fff',
          }}
        >
          <b>{label}</b>
        </Typography>
      )}
      <CardContent sx={{ p: 1 }}>
        <Droppable droppableId={`droppable-${borderColor}`}>
          {(provided, snapshot) => <div ref={provided.innerRef}>{children}</div>}
        </Droppable>
      </CardContent>
    </Card>
  );
};

export default BoardColumn;
