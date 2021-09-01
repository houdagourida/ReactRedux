import { Button } from "@material-ui/core";
import React from "react";
import { useDispatch } from "react-redux";
import { remouve, edit_task, toggle } from "../Redux/Actions/actions";
import EditTask from "./EditTask";

const ToDo = ({ Task }) => {
  // const todoo = useSelector(state => state.todoo)
  const dispatch = useDispatch();
  return (
    <div className="Task">
      <h1 style={{ color: "red" }} className={Task.isDone ? "Done" : ""}>
        {Task.desc}
      </h1>
      <div className="Task_1"><Button
        variant="contained"
        color="primary"
        onClick={() => {
          dispatch(remouve(Task.id));
        }}
      >
        Remove
      </Button>
      <EditTask Task={Task} />
      <Button variant="contained" onClick={() => dispatch(toggle(Task.id))}>
        {Task.isDone ? "Done" : "Undone"}
      </Button>
      </div>
    </div>
  );
};

export default ToDo;
