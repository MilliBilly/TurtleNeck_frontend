import React from 'react';

const PostPage = () =>{
    const basicButtonReaction = (name:string) => {
        console.log(name + " is clicked");
    }

    return (
        <div>
            <span>
                🚩 this Page is TurtleNeck's PostPages.
            </span>
            <p>
                (check Console Log.)
            </p>
            <button type='button' onClick={() => {basicButtonReaction("button1")}}>
                1: ClickMe!
            </button>
            <button type='button' onClick={() => {basicButtonReaction("button2")}}>
                2: ClickMe!
            </button>
        </div>
    )
}

export default PostPage;