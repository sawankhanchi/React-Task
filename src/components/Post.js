import React from 'react';
import './Post.css';
import Avatar from '@material-ui/core/Avatar';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import ShareIcon from '@material-ui/icons/Share';
import EmojiObjectsIcon from '@material-ui/icons/EmojiObjects';
import SmsOutlinedIcon from '@material-ui/icons/SmsOutlined';
import InputOption from './InputOption';

function Post(props) {

    return (
        <div className="post" style={{marginLeft: `${props.posts.postLevel}20px`}} >
            <div className="post_header">
                <Avatar
                    src="https://pbs.twimg.com/profile_images/1386317066139934722/U6DoXe_V_400x400.jpg"
                    alt="profile_image"
                    style={{width: 40, height: 40}}>
                </Avatar>

                <div className="post_info">
                    <h2>{props.posts.displayname}</h2>
                    <p>{props.posts.username}</p>
                </div>

                <div className="post_header_right">
                    <p>{props.posts.postedAt}</p>
                    <MoreHorizIcon style={{marginLeft: '10px'}} />
                </div>

            </div>

            <div className="post_body">
                <p>{props.posts.text}</p>
            </div>

            <div className="post_buttons">
                <InputOption Icon={ShareIcon} title={props.posts.likes} />
                <InputOption Icon={EmojiObjectsIcon} title={props.posts.shares} />
                { props.posts.replies && 
                <InputOption Icon={SmsOutlinedIcon} title={props.posts.replies.length} /> }
            </div>
            
        </div>
    )
}

export default Post;
