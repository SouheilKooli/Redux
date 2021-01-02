import React, {useState} from "react";
import {connect} from "react-redux";
import {todolistFilters, toggleTodo, text} from "./Action/Actions";
import "../App.css";
import {useDispatch} from "react-redux";
import {updateTodo} from "./Action/Actions";



const getListTask = (totasks, filter) => {
  switch (filter) {
    case todolistFilters.SHOW_ALL:
      return totasks;
    case todolistFilters.SHOW_ACTIVE:
      return totasks.filter((t) => !t.completed);
    case todolistFilters.SHOW_COMPLETED:
      return totasks.filter((t) => t.completed);
    default:
      throw new Error("unknown filter" + filter);
  }
};

const mapStateToProps = (state) => {
  return {
    totasks: getListTask(state.totasks, state.todolistFilter),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggleTodo: (id) => dispatch(toggleTodo(id)),
  };
};

const ListTask = ({ totasks, toggleTodo }) => {
  const [editable, setEditable] = useState(false);
  const [text, setText] = useState();
  const dispatch = useDispatch();
  return (
    <div className="todo-container">
      <ul className="todo-list">
        <span>✅ Task1: Do 1</span>
        <br />
        <span>✅ Task2: Do 2 </span>
        <br />
        {totasks.map((totask) => (
          <div className="list">
            <div
              onClick={() => toggleTodo(totask.id)}
              key={totask.id}
              style={{
                color: "black",
              }}
            >
              {totask && totask.completed ? "✅" : "⬜"}{" "}
              <div
                className={
                  totask && totask.completed && "totask-item__text--completed"
                }
              >
                {totask.text}
              </div>
              <div>
                {editable ? (
                  <input classeName="edit"
                    type="text"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                  />
                ) : (
                  <span>{}</span>
                )}
                <button 
                  className="btn"
                  onClick={() => {
                    dispatch(
                      updateTodo({
                        ...totask,
                        text: text,
                      })
                    );

                    if (editable) {
                      setText(text);
                    }
                    setEditable(!editable);
                  }}
                >
                  "✎" {editable ? "updated" : "Edit"}
                </button>
              </div>
            </div>
          </div>
        ))}
      </ul>
    </div>
  );
};
export default connect(mapStateToProps, mapDispatchToProps)(ListTask);