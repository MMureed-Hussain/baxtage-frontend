import { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Stack } from '@mui/material';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import { PATH_DASHBOARD } from '../../routes/paths';
import KanbanColumn from './column/KanbanColumn';
// ----------------------------------------------------------------------

KanbanPage.getLayout = (page) => <>{page}</>;

// ----------------------------------------------------------------------

export default function KanbanPage() {
  const columnIds = {
    column1: '8cd887ec-b3bc-11eb-8529-0242ac130003',
    column2: '23008a1f-ad94-4771-b85c-3566755afab7',
    column3: '37a9a747-f732-4587-a866-88d51c037641',
  };
  const [apiData, setApiData] = useState();
  const [cardList, setCardList] = useState();
  const [columnList, setColumnList] = useState([
    {
      id: columnIds.column1,
      name: 'New',
      cardIds: [],
    },
    {
      id: columnIds.column2,
      name: 'In Progress',
      cardIds: [],
    },
    {
      id: columnIds.column3,
      name: 'Done',
      cardIds: [],
    },
  ]);
  const cardListArray = [];

  const cardIds = {
    card1: 'deb02f04-9cf8-4f1e-97e0-2fbda84cc6b3',
    card2: '98bf6e8b-becc-485b-9c3f-a7d09392c48d',
    card3: '99fbc02c-de89-4be3-9515-f8bd12227d38',
    card4: 'ab9cebca-6cb4-4847-aa17-3b261b3dd0fb',
    card5: 'ebf0d26a-78e5-414f-986f-003d8fcd3154',
    card6: '9d98ce30-3c51-4de3-8537-7a4b663ee3af',
    card7: '0f71fb1f-9fce-419c-a525-46aeeb9b3e83',
    card8: '534fac32-cae1-4d77-965a-062d2114bc29',
    card9: 'dc0fa705-1740-46a4-a3ec-5c6d67b6f402',
    card10: '5b323625-c53b-4d06-86df-b59e180657a0',
  };
  useEffect(async () => {
    try {
      const response = await axios.get('http://localhost:8000/api/orders');
      setApiData(response.data.data);
      console.log('api dat', response.data);
      console.log('api dat product name', response.data.data[0].order_lines[0].product.name);
    } catch (error) {
      console.error('Error fetching data from API:', error);
      return null;
    }
  }, []);

  useEffect(() => {
    console.log('apidata in useefc', apiData);
    if (apiData !== undefined) {
      apiData.map((data) =>
        cardListArray.push({
          id: data.order_lines[0].product.id.toString(),
          name: data.order_lines[0].product.name,
          description: 'Production',
          assignee: [
            { id: '473d2720-341c-49bf-94ed-556999cf6ef7', avatar: `https://picsum.photos/id/1`, name: `Name 2` },
          ],
          due: [null, null],
          attachments: [],
          comments: [],
          completed: false,
          status: data.order_lines[0].status.name_en,
        })
      );
      console.log('cardlistarray', cardListArray);
      const newCards = [...cardListArray];
      setCardList(newCards);
    }
  }, [apiData]);

  useEffect(() => {
    console.log('cardlsi use effect', cardList);
    if (cardList !== undefined) {
      const newColumn = [...columnList];
      cardList.map((data) => (data.status === 'New' ? newColumn[0].cardIds?.push(data.id) : ''));
      setColumnList(newColumn);
    }
  }, [cardList]);
  console.log('cardlist array', cardList);

  console.log('column list', columnList);

  const board = {
    cards: cardList,
    columns: columnList,
    columnOrder: [columnIds.column1, columnIds.column2, columnIds.column3],
  };
  console.log('board', board);

  const onDragEnd = (result) => {
    const { destination, source, draggableId, type } = result;

    if (!destination) return;

    if (destination.droppableId === source.droppableId && destination.index === source.index) return;

    if (type === 'column') {
      const newColumnOrder = Array.from(board.columnOrder);

      newColumnOrder.splice(source.index, 1);

      newColumnOrder.splice(destination.index, 0, draggableId);

      return;
    }

    const start = board.columns[source.droppableId];
    const finish = board.columns[destination.droppableId];

    if (start.id === finish.id) {
      const updatedCardIds = [...start.cardIds];

      updatedCardIds.splice(source.index, 1);

      updatedCardIds.splice(destination.index, 0, draggableId);

      const updatedColumn = {
        ...start,
        cardIds: updatedCardIds,
      };
      return;
    }

    const startCardIds = [...start.cardIds];

    startCardIds.splice(source.index, 1);

    const updatedStart = {
      ...start,
      cardIds: startCardIds,
    };

    const finishCardIds = [...finish.cardIds];

    finishCardIds.splice(destination.index, 0, draggableId);

    const updatedFinish = {
      ...finish,
      cardIds: finishCardIds,
    };
  };

  return (
    <>
      <Container maxWidth sx={{ height: 1 }}>
        <DragDropContext onDragEnd={onDragEnd}>
          {console.log('board insied', board)}
          <Droppable droppableId="all-columns" direction="horizontal" type="column">
            {(provided) => (
              <Stack
                {...provided.droppableProps}
                ref={provided.innerRef}
                spacing={3}
                direction="row"
                alignItems="space-between"
                justifyContent="space-evenly"
                sx={{
                  height: 1,
                  overflowY: 'hidden',
                }}
              >
                {!board.columnOrder.length ? (
                  <></>
                ) : (
                  board.columnOrder.map((columnId, index) => (
                    <KanbanColumn
                      index={index}
                      key={columnId}
                      column={board.columns.find((c) => c.id === columnId)}
                      cards={board.cards}
                    />
                  ))
                )}

                {provided.placeholder}
              </Stack>
            )}
          </Droppable>
        </DragDropContext>
      </Container>
    </>
  );
}
