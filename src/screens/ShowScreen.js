import React, { useContext } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { EvilIcons } from '@expo/vector-icons';
import { Context as blogContext } from '../context/BlogContext';

const ShowScreen = ({ navigation }) => {
  const { state } = useContext(blogContext);
  const blogPost = state.find(item => item.id === navigation.getParam('id'));

  return (
    <View>
      <Text>Title:</Text>
      <Text>{blogPost.title}</Text>
      <Text>Content:</Text>
      <Text>{blogPost.content}</Text>
    </View>
  );
};

export default ShowScreen;

ShowScreen.navigationOptions = ({ navigation }) => ({
  headerRight: () => (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate('Edit', { id: navigation.getParam('id') })
      }
    >
      <EvilIcons name="pencil" size={35} />
    </TouchableOpacity>
  ),
});
