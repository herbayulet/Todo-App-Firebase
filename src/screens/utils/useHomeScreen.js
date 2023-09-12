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
  const [age, setAge] = useState("")

  // Menambah Todo
  const addTodos = async () => {
    try {
      const res = await addDoc(collection(db, "todoList"), {
        name: name,
        age: age,
        isChecked: false,
      });
      Alert.alert("Berhasil disimpan");
      setName("");
      setAge("")
    } catch (error) {
      Alert.alert(error.message);
    }
    getListTodo();
  };

  // Get Todo
  const getListTodo = async () => {
    try {
      const query = await getDocs(collection(db, "todoList"));
      const filteredTodo = query.docs
        .map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }))
        // .filter((item) => item.age <= 22); // Filter client-side
  
      setTodo(filteredTodo);
    } catch (error) {
      Alert.alert(error.message);
    }
  };


  useEffect(() => {
    getListTodo()
  }, []);

  return { todo, name, setName, age, setAge, addTodos, db, doc, updateDoc, deleteDoc, getListTodo };
};

export default useHomeScreen;
