import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, FlatList, StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [listaActiva, setListaActiva] = useState(0);
  const [categorias, setCategorias] = useState([
    { key: "Electronica",  },
    { key: "Linea Blanca",  },
    { key: "Ropa",  },
    { key: "Autos", },
    { key: "Libros", },
    
  ]);

  const [productos, setProductos] = useState([
    { key: "Xiaomi 1",  },
    { key: "Macbook",  },
    { key: "Iphone",  },
    { key: "Camisa", },
    { key: "C la guía", },
    { key: "Pantalon", },
    { key: "Realme 7", },
    { key: "Laptop HP", },
    { key: "Mazda 2", },
    { key: "Lavadora", },
  ]);


  const listas =()=>{
      if (listaActiva===0) {
          return <Text>{"No hay listas mostradas"}</Text>
      } else {
        if (listaActiva===1) {
          return <FlatList
          data={productos}
            renderItem={({ item }) => (
              <Text style={styles.textos}>{item.key}</Text>)}
          />
        } else {
          return <FlatList
          data={categorias}
            renderItem={({ item }) => (
              <Text style={styles.textos}>{item.key}</Text>)}
          />
        }
      }
  }
  
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>{"Listas de Productos y Categorias"}</Text>
      <View style={styles.btns} >
      <Button
      onPress={()=>{
        setListaActiva(1)
      }}
      color={"blue"}

      title = {"Productos"}
      />
      <Text style={styles.espacio}></Text>
      <Button
      onPress={()=>{
        setListaActiva(2)
      }}
      color={"purple"}
      
      title = {"Categorias"}
      />
      </View>
      {listas()}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btns:{
    flex:1,
    flexDirection:"row",
    alignItems: 'center',
    justifyContent: 'center',
    margin:2,
    padding:1
  },
  titulo:{
    
      fontSize:20,
      fontWeight:"bold",
      margin:10
      ,paddingTop:50
  },
  textos:{
    fontSize:20,
    padding:5,
    margin:2,
    borderWidth:0.1,
    borderColor:"gray",
    borderRadius:2,
    
    
  },
  espacio:{
    margin:5
  }
});
