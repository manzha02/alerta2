import {View ,Text, TextInput, Button ,StyleSheet, ScrollView,FlatList} from 'react-native'
import { useState } from 'react';
import uuid from 'react-native-uuid';
const App = () => {
  
  const [modalVisible, setModalVisible] = useState (false)
  const [newTask,setNewTask] = useState({
        title:"",
    description:"",
    id:""
  })

  const [tasks,setTask] = useState([])

const addTask = () =>{
  setTask([...tasks,newTask])

  setNewTask({
    title:"",
    description:"",
    id:""
  })
}

const onHandlerTitle = (t)=>{
  const id = uuid.v4()
   setNewTask({...newTask, title:t,id})
}

const onHandlerDescription = (t) => {
  setNewTask({...newTask, description:t})
}

const deleteTask =(id)=> {
setTask(tasks.filter(tasks => tasks.id != id))
}

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput value={newTask.title} onChangeText={onHandlerTitle} placeholder='Ingresar titulo' style={styles.input}/>
        <TextInput value={newTask.description} onChangeText={onHandlerDescription} placeholder='Ingresar descripcion' style={styles.input}/>
        <Button color="#3921F5" title='ADD'  onPress={addTask}/>
      </View>
      <View style={styles.tasksContainer}></View>
      <FlatList
   data={tasks}
   keyExtractor={item => item.id}
   renderItem={({item})=>(
                           <View style={styles.taskCard}>
                            <Text style={styles.text}>{item.title}</Text>
                            <Button title='DEL' onPress={() => deleteTask (item.id)}/>
                            </View>

   )}
   />


  </View>
  )}
export default App

const styles = StyleSheet.create({
  container:{
    backgroundColor:"#C5C5C5",
    flex:1,
    paddingTop:30
  },
  inputContainer:{
    alignItems:"center",
    justifyContent:"space-around"
  },
  input:{
    width:250,
    borderBottomWidth:2,
    borderColor:"white",
    margin:10,
    paddingVertical:5,
    paddingHorizontal:10
  },
  tasksContainer:{
    padding:10
  },
  taskCard:{
    flexDirection:"row",
    backgroundColor:"#F00000",
    padding:20,
    gap:200,
    marginVertical:10,
    alignItems:"center",
    borderRadius:5
  },
  text:{
    width:"70%",
    color:"white",
    fontSize:16
  },
})