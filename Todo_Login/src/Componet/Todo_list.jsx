import React from "react";

export const TodoList = ({ props }) => {
  const { todoData, setTodoData } = props;

  const [editValue, setEditsValue] = React.useState("");
  const [editValueID, setEditsValueID] = React.useState("");

  const handleDelete = (id) => {
    if (!id) return;
    const filterArr = todoData.filter((el) => el.id !== id);
    setTodoData(filterArr);
  };

  const handleEdits = (id) => {
    if (!id) return;
    setEditsValueID(id);
    const editArr = todoData.map((el) =>
      el.id === id ? { ...el, isEdits: !el.isEdits } : el
    );
    setTodoData(editArr);
  };

  const handleCancel = (id) => {
    if (!id) return;
    const cancelEditsArr = todoData.map((el) =>
      el.id === id ? { ...el, isEdits: !el.isEdits } : el
    );
    setTodoData(cancelEditsArr);
  };

  const handleConfirm = () => {
    if (!editValueID && editValue.trim() === " ") return;
    const confirmEditsArr = todoData.map((el) =>
      el.id === editValueID
        ? { ...el, text: editValue, isEdits: !el.isEdits }
        : el
    );
    setTodoData(confirmEditsArr);
  };
  return (
    <>
      <h1>todo List</h1>
      {todoData?.map((el) => (
        <div
          key={el.id}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "20px",
          }}
        >
          <input type="checkbox" name="complete" id="complete" />
          {el.isEdits ? (
            <input
              type="text"
              defaultValue={el.text}
              onChange={(e) => setEditsValue(e.target.value)}
            />
          ) : (
            <h3>{el.text}</h3>
          )}
          {el.isEdits ? (
            <>
              <button onClick={() => handleCancel(el.id)}>cancel</button>
              <button onClick={handleConfirm}>confirm</button>
            </>
          ) : (
            <>
              <button onClick={() => handleEdits(el.id)}>edit</button>
              <button onClick={() => handleDelete(el.id)}>delete</button>
            </>
          )}
        </div>
      ))}
    </>
  );
};
