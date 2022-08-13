import React, {FC} from 'react';
import {IPost} from "../models/IPost";
import classes from '../App.module.css'

interface PostItemProps {
    post: IPost
    remove: (id: number) => void
    update: (post: IPost) => void
}

const PostItem: FC<PostItemProps> = ({post, update, remove}) => {

    const handleRemove = (event: React.MouseEvent ) => {
        event.stopPropagation()
        remove(post.id)
    }
    const handleUpdate = (event: React.MouseEvent ) => {
        const body = prompt() || ''
        update({...post, body})
    }



    return (
        <div className={classes.post} onClick={handleUpdate}>
            {post.id}.
            {post.body}
            <button onClick={handleRemove}>
                delete
            </button>
        </div>
    );
};

export default PostItem;