import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
  TextInput,
  Alert,
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
// import RNSelect from 'react-native-select-awesome';
// import DropDownPicker from 'react-native-dropdown-picker';
// import Icon from 'react-native-vector-icons/Feather';
// const LANGS = [
//   {id: 1, label: 'Java', value: 'java'},
//   {id: 2, label: 'JavaScript', value: 'js'},
//   {id: 3, label: 'Python', value: 'py'},
//   {id: 4, label: 'C', value: 'c'},
//   {id: 5, label: 'PHP', value: 'php'},
//   {id: 6, label: 'Java', value: 'java'},
//   {id: 7, label: 'JavaScript', value: 'js'},
//   {id: 8, label: 'Python', value: 'py'},
//   {id: 9, label: 'C', value: 'c'},
//   {id: 10, label: 'PHP', value: 'php'},
//   {id: 11, label: 'Java', value: 'java'},
//   {id: 12, label: 'JavaScript', value: 'js'},
//   {id: 13, label: 'Python', value: 'py'},
//   {id: 14, label: 'C', value: 'c'},
//   {id: 15, label: 'PHP', value: 'php'},
//   {id: 16, label: 'Java', value: 'java'},
//   {id: 17, label: 'JavaScript', value: 'js'},
//   {id: 18, label: 'Python', value: 'py'},
//   {id: 19, label: 'C', value: 'c'},
//   {id: 20, label: 'PHP', value: 'php'},
// ];
// const itemCustom = {color: '#146eff'};

const Search = (props) => {
  const {buscarbtn} = props;

  const [value, onChangeText] = useState('');
  const [gramos, setGramos] = useState('100');
  // const [value, setValue] = useState(null);
  // const [items, setItems] = useState([{}]);
  // let controller;
  return (
    <View style={styles.container}>
      <Text style={{fontSize: 18}}>Gramos:</Text>
      <TextInput
        style={[styles.input, styles.input2]}
        onChangeText={(text) => setGramos(text)}
        value={gramos}
      />
      <Text style={{fontSize: 18}}>Indique el nombre del alimento: </Text>
      <TextInput
        style={styles.input}
        onChangeText={(text) => {
          onChangeText(text)
          // buscarbtn(value)
        }}
        value={value}
      />
      <Button title="Buscar" onPress={() => {
          console.log(value);
          buscarbtn(value);
      } } />
      {/*<RNSelect
        datas={LANGS}
        placeholder="Select lang"
        height={60}
        styleItem={itemCustom}
      />*/}
      {/*    <RNSelect
        datas={LANGS}
        placeholder="Select people"
        label="name"
        notFind="Opp... !"

        styleNotFind={{textAlign: 'center'}}
        customItem={(item, _selectValue) => {
          return (
            <View style={{marginBottom: 10, backgroundColor: '#f00'}}>
              <Text onPress={() => _selectValue(item)}>{item.name}</Text>
            </View>
          );
        }}
      />*/}
      {/* <DropDownPicker
        items={[
          {label: 'USA', value: 'usa', icon: () => <Icon name="flag" size={18} color="#900" />, hidden: true},
          {label: 'UK', value: 'uk', icon: () => <Icon name="flag" size={18} color="#900" />},
          {label: 'France', value: 'france', icon: () => <Icon name="flag" size={18} color="#900" />},
        ]}
        controller={(instance) => (controller = instance)}

        onChangeList={(items, callback) => {
          new Promise((resolve, reject) => resolve(setItems(items)))
            .then(() => callback())
            .catch(() => {});
        }}
        defaultValue={value}
        onChangeItem={(item) => setValue(item.value)}
      />*/}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.light,
    // flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
    height: '30%',
  },
  input2: {
    width: '30%',
  },
  input: {
    height: 40,
    width: '80%',
    borderColor: 'gray',
    borderWidth: 1,
    backgroundColor: '#fff',
    // fontSize: 100,
    // color: 'red',
  },
});
export default Search;

