import React, { useState } from 'react';

import styles from './style';

import { Dimensions, View, TouchableOpacity, Text } from 'react-native';
import { TextField } from 'react-native-material-textfield';

const getToken =
  'W0+m2Xb34P+Susy+kswsEIXUNxKQtSxJaqGmNK3F7ZEBIvLuIZSY0NzctubGp2YhtIdGJqD/HwEo6ZV677bGxQ==';

const EnterScreen = ({ navigation, error }) => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const enter = async () => {
    try {
      const form = new FormData();

      form.append('unique_id', login);
      form.append('password', password);
      form.append('authenticity_token', getToken);

      const request = await fetch('https://canvas.cornell.edu/login/canvas', {
       // headers: { authorization: `Bearer ${getToken}` },
        method: 'POST',
        body: form,
      });
      console.log({request})
      const json = await request.blob();

      console.log({json})
    } catch (err) {
      console.log({ err });
    }
  };

  return (
    <View style={styles.bodyCenter}>
      <View style={styles.form}>
        <TextField
          containerStyle={{ width: 300 }}
          label="Login"
          maxLength={30}
          value={login}
          onChangeText={setLogin}
          keyboardType={'email-address'}
          autoCapitalize="none"
        />
        <TextField
          containerStyle={{ width: 300 }}
          label="Password"
          maxLength={30}
          value={password}
          onChangeText={setPassword}
        />
        <TouchableOpacity
          onPress={enter}
          style={styles.pseudoButton}>
          <Text style={styles.pseudoLink}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default EnterScreen;
