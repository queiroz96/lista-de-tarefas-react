import React, {useState} from "react";
import { View, SafeAreaView, Text, StyleSheet, TouchableOpacity } from "react-native";
import Login from "./src/Components/Login";


export default function App(){

const [user, setUser] = useState(null)

if(!user){
  return <Login/>
}

  return(
    <SafeAreaView>
      <View>
        <Text>
          Tela de Tarefas
        </Text>
      </View>
    </SafeAreaView>
  )
}