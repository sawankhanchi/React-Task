import React, { useEffect, useState } from 'react';
import './Feed.css';
import Post from './Post';
import axios from 'axios';

function Feed() {
    const [posts, setPosts] = useState('');

    const url = 'https://banking-appi-ly.herokuapp.com/posts';

    useEffect(() => {

        getAllPosts();
        
    }, []);

    const getAllPosts = () => {
        axios.get(`${url}`)
        .then((response) => {
            const allPosts = response.data;
            setPosts(allPosts);
            console.log(response)
        })

        .catch(error => console.log(`Error: ${error}`));
    }

    console.log(posts);

    return (
        <div className="feed">
            {/* posts */}
            <Post posts={posts} />
            { posts && posts.replies && posts.replies.map((item) => {
                return (
                    <>
                    <Post posts={item} />

                        { item && item.replies && item.replies.map((childItem) => {
                        return (
                            <>
                            <Post posts={childItem} />

                            { childItem && childItem.replies && childItem.replies.map((grandChildItem) => {
                        return (
                            <>
                            <Post posts={grandChildItem} />
                            </>
                            )
                        })}
                            </>
                            )
                        })}
                    </>
                )
            })}
        </div>
    )
}

export default Feed;
