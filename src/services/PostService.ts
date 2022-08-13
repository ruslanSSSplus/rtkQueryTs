import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";
import {IPost} from "../models/IPost";


export const postAPI = createApi({
    reducerPath: 'postAPI',
    baseQuery: fetchBaseQuery({baseUrl: 'https://testback123321.herokuapp.com'}),
    tagTypes: ['Post'],
    endpoints: (build) => ({
        fetchAllPosts: build.query<IPost[], number>({
            query: () => ({
                url: '/getPosts',
            }),
            providesTags: result => ['Post']
        }),
        createPost: build.mutation<IPost[], IPost>({
            query: (post) => ({
                url: '/postPost',
                method: 'POST',
                body: post
            }),
            invalidatesTags: ['Post']
        }),
        updatePost: build.mutation<IPost[], IPost>({
            query: (post) => ({
                url: '/updatePost',
                method: 'POST',
                body: post
            }),
            invalidatesTags: ['Post']
        }),
        deletePost: build.mutation<IPost[], number>({
            query: (id) => ({
                url: '/deletePost',
                method: 'POST',
                body: {id}
            }),
            invalidatesTags: ['Post']
        }),
    })
})