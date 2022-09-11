import { createSlice } from '@reduxjs/toolkit';
import blogsService from '../services/blogs';
import {
    setErrorNotification,
    setSuccessNotification,
} from './notificationReducer';

/* sort blogs according to like numbers */
const sortedBlogs = (blogs) => blogs.sort((a, b) => b.likes - a.likes);

const blogSlice = createSlice({
    name: 'blogs',
    initialState: [],
    reducers: {
        _setBlogs(state, action) {
            return sortedBlogs(action.payload);
        },
        _addNewBlog(state, action) {
            // state can be mutable when using redux/toolkit
            state.push(action.payload);
        },
        _deleteBlog(state, action) {
            return sortedBlogs(
                state.filter((blog) => blog.id !== action.payload)
            );
        },
        _updateABlog(state, action) {
            return sortedBlogs(
                state.map((blog) =>
                    blog.id === action.payload.id ? action.payload : blog
                )
            );
        },
    },
});

export const { _setBlogs, _addNewBlog, _deleteBlog, _updateABlog } =
    blogSlice.actions;

export const initializeBlogs = () => {
    return async (dispatch) => {
        const blogs = await blogsService.getAll();
        dispatch(_setBlogs(blogs));
    };
};

export const createBlog = (newBlogObj) => {
    return async (dispatch) => {
        try {
            const savedBlog = await blogsService.create(newBlogObj);
            dispatch(_addNewBlog(savedBlog));
            dispatch(
                setSuccessNotification(
                    `a new blog ${newBlogObj.title} by ${newBlogObj.author} added`
                )
            );
        } catch (exception) {
            console.log(exception);
            dispatch(setErrorNotification(exception.message));
        }
    };
};

export const deleteBlog = (blogId) => {
    return async (dispatch) => {
        try {
            await blogsService.remove(blogId);
            dispatch(_deleteBlog(blogId));
            dispatch(setSuccessNotification('The blog has been deleted!'));
        } catch (exception) {
            console.log(exception);
            dispatch(setErrorNotification(exception.response.data.error));
        }
    };
};

export const likeBlog = (updatedBlog) => {
    return async (dispatch) => {
        const savedBlog = await blogsService.update(updatedBlog);
        dispatch(_updateABlog(savedBlog));
    };
};

export const addCommentToBlog = (content, blog) => {
    return async (dispatch) => {
        const savedComment = await blogsService.addComment(
            { content },
            blog.id
        );
        delete savedComment.blog;
        dispatch(
            _updateABlog({
                ...blog,
                comments: [...blog.comments, savedComment],
            })
        );
    };
};

export default blogSlice.reducer;
