import React from 'react';
import {postAPI} from "../services/PostService";
import PostItem from "./PostItem";
import classes from '../App.module.css'
import {IPost} from "../models/IPost";


const PostContainer = () => {

    const {data: posts, error, isLoading} = postAPI.useFetchAllPostsQuery(2)
    const [createPost, {}] = postAPI.useCreatePostMutation()
    const [deletePost, {}] = postAPI.useDeletePostMutation()
    const [updatePost, {}] = postAPI.useUpdatePostMutation()


    const handleCreate = async () => {
        const body = prompt()
        await createPost({body: body} as IPost)
    }

    const handleRemove = (id: number) => {
        deletePost(id)
    }
    const handleUpdate = (post: IPost) => {
        updatePost(post)
    }

    return (
        <div className={classes.postList}>
            <button onClick={handleCreate}>
                Add new post
            </button>
            {isLoading && <h1> идет загрузка...</h1>}
            {error && <h1>Ошибка</h1>}
            {posts && posts.map(post =>
                <PostItem key={post.id} post={post} remove={handleRemove} update={handleUpdate}/>
            )}
            </div>
    );
};

export default PostContainer;