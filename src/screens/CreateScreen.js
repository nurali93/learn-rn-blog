import React, { useContext } from 'react';
import { Context as blogContext } from '../context/BlogContext';
import BlogPostForm from '../components/BlogPostForm';

const CreateScreen = ({ navigation }) => {
  const { addBlogPost } = useContext(blogContext);

  return (
    <BlogPostForm
      onSubmit={(title, content) =>
        addBlogPost(title, content, () => navigation.navigate('Index'))
      }
      label="Enter New"
    />
  );
};

export default CreateScreen;
