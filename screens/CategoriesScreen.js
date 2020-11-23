import React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';

const CategoriesScreen = props => {
  return (
    <View style={styles.screen}>
      <Text>The Categories Screen</Text>
      <Button
        title='Go to Meals!'
        onPress={() => {
          //! Alternatively, you pass the routeName as the first argument
          //! like this: ...navigate('CategoryMeals');
          props.navigation.navigate({ routeName: 'CategoryMeals' });

          //! For example, user sign in screen. Navigation stack replace
          // props.navigation.replace({ routeName: 'CategoryMeals' });
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default CategoriesScreen;
