import React, {useState} from "react";
import { View, SafeAreaView, Text, StyleSheet, TouchableOpacity, TextInput } from "react-native";
import firebase from "../../Services/firebaseconnection";

export default function Login(){
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [type, setType] = useState ('Login')

    function handleLogin(){
      if(type ==='Login'){
        // aqui fazemos o login 

        const user = firebase.auth().signInWithEmailAndPassword(email,password)
        .then((user) => {
          console.log(user.user)
          alert ('logado com sucesso.')
        
        })
        .catch((error) => {
          console.log(error)
          alert ('Ops, algo deu errado')
        })


      }else{
        // aqui cadastramos

        const user = firebase.auth().createUserWithEmailAndPassword(email,password)
        .then((user) =>{

          console.log(user.user)
          alert ('Usuário cadastrado com sucesso')
          setEmail('')
          setPassword('')

        })
        .catch((error) => {
          console.log(error)
          alert ('Ops, algo deu errado')
        })
      }
    }

  return(
    <SafeAreaView style={styles.container}>
      <View>
        <TextInput
        placeholder="Digite seu e-mail"
        style={styles.input}
        value={email}
        onChangeText={(texto) => setEmail(texto)}
        >
        </TextInput>

        <TextInput
        secureTextEntry={true}
        placeholder="Digite sua senha"
        style={styles.input}
        value={password}
        onChangeText={(texto) => setPassword(texto)}
        >
        </TextInput>

        <TouchableOpacity style={styles.btnAcessar}
        onPress={handleLogin}
        >
            <Text style={{color:'#FFF', fontSize:20}}>
                {type === 'Login' ? 'Acessar' : 'Cadastrar'}
            </Text>
        </TouchableOpacity>

        <TouchableOpacity style={{justifyContent:'center', alignItems:'center', marginTop:20}}
        onPress={() => setType(type === 'Login' ? 'Cadastrar' : 'Login')}
        >
            <Text style={{color:'#121212', fontSize:16, textDecorationLine:'underline'}}>
                {type === 'Login' ? 'Não tem uma conta? Criar' : 'Já possuo uma conta. Logar'}
            </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1, 
        justifyContent: "flex-start", 
         alignItems:'center',
         marginTop:100
    }, 

    input:{
        marginTop:20, 
        width:300, 
        height:50, 
        paddingHorizontal:10, 
        fontSize:16, 
        borderRadius:9, 
        borderWidth:1
        }, 

        btnAcessar:{
            alignItems:'center', 
            backgroundColor:'#1f48b6', 
            height:50,
            justifyContent:'center', 
            borderRadius:9, 
            marginTop:50
        }
})