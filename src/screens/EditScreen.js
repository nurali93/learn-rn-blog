import React, { useContext, useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { Context as blogContext } from '../context/BlogContext';
import BlogPostForm from '../components/BlogPostForm';

const EditScreen = ({ navigation }) => {
  const id = navigation.getParam('id');
  const { state, editBlogPost } = useContext(blogContext);
  const { title, content } = state.find(item => item.id === id);

  return (
    <BlogPostForm
      onSubmit={(newTitle, newContent) =>
        editBlogPost(id, newTitle, newContent, () =>
          navigation.navigate('Show', { id })
        )
      }
      initialValues={{ title, content }}
      label="Edit"
    />
  );
};

export default EditScreen;

const styles = StyleSheet.create({
  input: {
    fontSize: 18,
    borderWidth: 1,
    borderColor: 'grey',
    marginBottom: 15,
    padding: 5,
    margin: 5,
  },
  label: {
    fontSize: 20,
    marginBottom: 5,
    marginLeft: 5,
  },
});
