import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,

} from 'react-native';
import Search from '../componets/Search';
import dataAlimentos from '../utils/dataAlimentos';
import {Colors} from 'react-native/Libraries/NewAppScreen';

const HomeScreen = () => {
  const [dataBusqueda, setDataBusqueda] = useState([]);
  console.log('hola');

  /*  const convertToMatris = () => {
      let tableData = [];

      dataBusqueda.forEach((objJ) => {
        const rowData = [];
        console.log('j:', objJ);

        if (objJ?.caloria){

        }
      });
      /!*   (let i = 0; i <dataBusqueda.length ; i += 1) {
          const rowData = [];
          for (let j = 0; j < 9; j += 1) {
            rowData.push(`${i}${j}`);
          }
          tableData.push(rowData);
        }*!/
      return tableData;
    };*/

  const buscarbtn = (name) => {
    console.log(name);
    let data = dataAlimentos.map((obj) => {
      if (obj.name.search(name) >= 0) {
        // console.log('aqui devilviendo', dataAlimentos[obj]);
        return obj;
      }
      return;
    });
    setDataBusqueda(data);
    // convertToMatris();
    console.log(
      'new data',
      dataBusqueda.map((value) => value?.name),
    );
  };
  return (
    <>
      <Search buscarbtn={buscarbtn} />
      <View style={styles.container}>
        <View style={styles.row}>
          {dataBusqueda.map((value) => {
            if (value !== undefined) {
              return (
                <View style={styles.col}>
                  <Text>Producto: {value?.name}</Text>
                  <Text>Caloria: {value?.caloria.value} </Text>
                  <Text>Carbohidratos: {value?.carbohidrato.value} </Text>
                  <Text>Proteina: {value?.proteina.value} </Text>
                  <Text>Grasa: {value?.grasa.value} </Text>
                </View>
              );
            }
            // } else {
            //   return (
            //     // <View style={styles.col}>
            //     //   <Text>Producto no encontrado...</Text>
            //     // </View>
            //   );
            // }
          })}
        </View>
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    // backgroundColor: Colors.light,
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    // height: '20%',
  },
  row: {
    // backgroundColor: 'red',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  col: {
    // backgroundColor: 'red',
    flex: 0,
    alignSelf: 'center',
    margin: 4,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#49caff',
    padding: 5,
  },
});

/*const buscarObjeto = (obj, name) => {
  // const va = `/${name}/g`;
  const productos = Object.keys(obj);
  console.log(obj);
  let a = [];
  for (let productoNombre of productos) {
    // console.log(productoNombre);
    // console.log(productoNombre.search(name));
    console.log('aaa');
    if (productoNombre.search(name) >= 0) {
      // console.log('aqui devilviendo', dataAlimentos[obj]);
      a.push({...obj, obj[productoNombre]});
    }
  }
  return a;
};*/

export default HomeScreen;
