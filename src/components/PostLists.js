import React from 'react'

const PostLists = ({postlist}) => {
    return (
        <div >
            <br />
            <br />
            <div>{postlist.map((post, index)=>
                <div key={index}>{post.title}</div>
            )}</div>
        </div>
    )
}

export default PostLists
