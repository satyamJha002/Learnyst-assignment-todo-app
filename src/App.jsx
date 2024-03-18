import React from "react";
import { motion } from "framer-motion";
import styles from "./App.module.css";

import Todos from "./components/Todos/Todos";
import store from "./redux/store.js";
import DisplayTodos from "./components/DisplayTodos/DisplayTodos";
import { Provider } from "react-redux";
function App() {
  return (
    <Provider store={store}>
      <div className={styles["app"]}>
        <motion.h1
          initial={{ y: -200 }}
          animate={{ y: 0 }}
          transition={{ type: "spring", duration: 0.5 }}
          whileHover={{ scale: 1.1 }}
        >
          Todo App
        </motion.h1>
        <motion.div
          initial={{ y: 1000 }}
          animate={{ y: 0 }}
          transition={{ type: "spring", duration: 1 }}
        >
          <Todos />
          <DisplayTodos />
        </motion.div>
      </div>
    </Provider>
  );
}

export default App;
