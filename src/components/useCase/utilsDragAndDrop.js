// a little function to help us with reordering the result
export const Reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

const grid = 6;
export const getItemStyle = (isDragging, draggableStyle) => {
  return {
    // some basic styles to make the items look a bit nicer
    userSelect: "none",
    paddingTop: 3,
    textAlign: "start",

    // change background colour if dragging
    // background: isDragging ? "white" : "white",

    // styles we need to apply on draggables
    ...draggableStyle
  };
};

export const getQuestionListStyle = isDraggingOver => ({
  // background: isDraggingOver ? "white" : "white",
  width: "100%",
  height: 156,
  border: "1px solid rgb(203, 203, 203)",
  borderRadius: 5,
  paddingTop: 5,
  paddingBottom: 3,
  overflowY: "scroll"
});

export const getAnswerListStyle = isDraggingOver => ({
  // background: isDraggingOver ? "white" : "white",
  paddingTop: 3,
  paddingLeft: 50
});
