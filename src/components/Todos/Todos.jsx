import React, { useState } from "react";
import { connect } from "react-redux";
import { addTodos } from "../../redux/reducer";
import { GoPlus } from "react-icons/go";
import { motion } from "framer-motion";
import styles from "./Todos.module.css";

const mapStateToProps = (state) => {
  return {
    todos: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (obj) => dispatch(addTodos(obj)),
  };
};

const Todos = (props) => {
  const [todo, setTodo] = useState("");
  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  const add = () => {
    if (todo === "") {
      alert("Input is Empty");
    } else {
      props.addTodo({
        id: Math.floor(Math.random() * 1000),
        item: todo,
        completed: false,
      });
      setTodo("");
    }
  };
  return (
    <>
      <h1 className={styles["title"]}>What needs to be done?</h1>
      <div className={styles["addTodos"]}>
        <input
          type="text"
          onChange={(e) => handleChange(e)}
          className={styles["todo-input"]}
          value={todo}
        />

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className={styles["add-btn"]}
          onClick={() => add()}
        >
          <GoPlus />
        </motion.button>
        <br />
      </div>
    </>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Todos);
