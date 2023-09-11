import { View, Text, Pressable, Alert } from "react-native";
import React, { useEffect, useState } from "react";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const TodoItem = ({ item, doc, db, deleteDoc, reloadData, updateDoc }) => {
  const [isChecked, setIsChecked] = useState(item?.isChecked);

  const deleteTodo = async () => {
    try {
        await deleteDoc(doc(db, "todoList", item?.id))
        reloadData()
    } catch (error) {
        Alert.alert(error.message)
    }
  }

  const updateTodo = async () => {
    try {
        const updateRef = doc(db, "todoList", item?.id);
        await updateDoc(updateRef, {
            isChecked:isChecked
        })

    } catch (error) {
        Alert.alert(error.message)
    }
  }

  useEffect(() => {
    updateTodo()
  }, [isChecked])

  return (
    <View className="w-full bg-slate-100 p-4 rounded-xl mt-3 flex-row justify-between">
      <View className="flex-row items-center gap-x-2 justify-start">
        <Pressable onPress={() => setIsChecked(!isChecked)}>
          {isChecked ? (
            <MaterialCommunityIcons
              name="checkbox-marked-circle"
              size={24}
              color="#30C5FF"
            />
          ) : (
            <MaterialCommunityIcons
              name="checkbox-blank-circle-outline"
              size={24}
              color="#2A2D34"
            />
          )}
        </Pressable>
        <Text>{item?.name}</Text>
      </View>
      <View className="flex-row items-center justify-end">
        <Pressable onPress={deleteTodo}>
          <MaterialCommunityIcons
            name="delete-outline"
            size={25}
            color="#F45B69"
          />
        </Pressable>
      </View>
    </View>
  );
};

export default TodoItem;
