import {
  View,
  Text,
  ScrollView,
  FlatList,
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React from "react";
import useHomeScreen from "./utils/useHomeScreen";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import TodoItem from "../components/TodoItem";

const HomeScreen = () => {
  const {
    todo,
    name,
    setName,
    addTodos,
    db,
    doc,
    updateDoc,
    deleteDoc,
    getListTodo,
  } = useHomeScreen();

  todo.forEach((data) => {
    console.log(data);
  })
  return (
    <View className="w-full flex-1 bg-slate-700">
      <StatusBar style="light" />
      <View className="mx-7 pt-3 bg-slate-700">
        <SafeAreaView>
          <Text className="text-2xl text-center font-bold text-rose-600">
            TODO LIST APP
          </Text>
        </SafeAreaView>
        <View className="">
          {todo?.length > 0 ? (
            <FlatList
              data={todo}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => (
                <TodoItem
                  item={item}
                  reloadData={getListTodo}
                  doc={doc}
                  db={db}
                  deleteDoc={deleteDoc}
                  updateDoc={updateDoc}
                />
              )}
            />
          ) : (
            <Text className="text-white text-center">Tidak ada Task</Text>
          )}
        </View>
        <View className="mt-40 bg-neutral-500 w-full rounded-xl p-3">
          <KeyboardAvoidingView>
            <TextInput
              className="px-2 text-lg text-white"
              placeholder="Task anda"
              placeholderTextColor="#FFFFFF"
              value={name}
              onChangeText={(text) => setName(text)}
            />
          </KeyboardAvoidingView>
        </View>
        <View className="flex justify-center items-center">
          <TouchableOpacity
            className="bg-rose-500 p-3 mt-3 rounded-lg w-28"
            onPress={addTodos}
          >
            <Text className="text-white text-lg text-center">Simpan</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default HomeScreen;
