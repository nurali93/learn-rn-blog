import createDataContext from './createDataContext';
import api from '../api';

const blogReducer = (state, action) => {
  switch (action.type) {
    case 'get_posts':
      return action.payload;
    case 'add_post':
      return [...state, action.payload];
    case 'delete_post':
      return state.filter(blogPost => blogPost.id !== action.payload);
    case 'edit_post':
      return state.map(post =>
        post.id === action.payload.id ? action.payload : post
      );
    default:
      return state;
  }
};

const getPosts = dispatch => async () => {
  const response = await api.get('/blogposts');

  dispatch({ type: 'get_posts', payload: response.data });
};

const addBlogPost = dispatch => async (title, content, callback) => {
  const response = await api.post('/blogposts', { title, content });

  dispatch({ type: 'add_post', payload: response.data });
  if (callback) callback();
};

const editBlogPost = dispatch => async (id, title, content, callback) => {
  const response = await api.put(`/blogposts/${id}`, { title, content });

  dispatch({ type: 'edit_post', payload: response.data });
  if (callback) callback();
};

const deleteBlogPost = dispatch => async id => {
  await api.delete(`/blogposts/${id}`);

  dispatch({ type: 'delete_post', payload: id });
};

export const { Context, Provider } = createDataContext(
  blogReducer,
  {
    addBlogPost,
    deleteBlogPost,
    editBlogPost,
    getPosts,
  },
  []
);
