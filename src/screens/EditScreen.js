import React, { useContext } from 'react';
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
