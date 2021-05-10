import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import Form from "../TaskForm/Form";
import Tasks from "../Tasks/Tasks";
import { getTasks } from "../../actions/tasks";
import Navbar from "../Navbar/Navbar";
import Modal from "../Tasks/Task/DeleteModal";

const Home = () => {
  const [currentId, setCurrentId] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTasks());
  }, [currentId, dispatch]);

  console.log(currentId);
  return (
    <div className="ui container">
      <Navbar />
      <Form currentId={currentId} setCurrentId={setCurrentId} />
      <Tasks setCurrentId={setCurrentId} currentId={currentId} />
    </div>
  );
};

export default Home;
