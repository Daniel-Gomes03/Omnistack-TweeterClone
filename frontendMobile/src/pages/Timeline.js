import React, { Component } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

// import styles from './styles';

export default class Timeline extends Component {
  static navigationOptions = {
    title: 'Início',
    headerRight: (
      <TouchableOpacity onPress={() => {}}>
        <Icon
          style={{marginRight: 20}}
          name="add-circle-outline"
          size={24}
          color="#4BB0EE"
        />
      </TouchableOpacity>
    )
  };

  render() {
    return <View style={styles.container}/>;
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF"
  }
});
