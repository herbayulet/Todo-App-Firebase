import { useEffect, useState } from "react";
import {
  db,
  getDocs,
  doc,
  addDoc,
  updateDoc,
  deleteDoc,
  collection,
} from "../../../firebase-config";
import { Alert } from "react-native";

const useHomeScreen = () => {
  const [todo, setTodo] = useState([]);
  const [name, setName] = useState("");

  // Menambah Todo
  const addTodos = async () => {
    try {
      const res = await addDoc(collection(db, "todoList"), {
        name: name,
        isChecked: false,
      });
      Alert.alert("Berhasil disimpan");
      setName("");
    } catch (error) {
      Alert.alert(error.message);
    }
    getListTodo();
  };

  // Get Todo
  const getListTodo = async () => {
    try {
      const query = await getDocs(collection(db, "todoList"));
      setTodo(
        query.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }))
      );
    } catch (error) {
      Alert.alert(error.message);
    }
  };


  useEffect(() => {
    getListTodo();
  }, []);

  return { todo, name, setName, addTodos, db, doc, updateDoc, deleteDoc, getListTodo };
};

export default useHomeScreen;
