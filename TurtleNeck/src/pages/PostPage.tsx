import React from 'react';
import {Link} from 'react-router-dom';
import { styled } from '@stitches/react';

const PostPageBack = styled('div', {
    padding: '0',
    margin: '0',
    background: 'Olive',
    height: '100vh',
    display: 'flex'
})

const PostPageSection = styled('div', {
    background: 'Ivory',
    width: '30rem',
    border: 'solid 1px',
    height: '100vh'
})

const PostPageContents = styled('span', {
    color:'Green',
    fontSize: '30px'
});

const FlagTitle = styled('span',{
    alignSelf:'center',
    fontSize: '40px'
})

const LeftSpace = styled('span',{
    padding: '0',
    margin: '0',
    background: 'olive',
    height: '100vh',
    width: '45vw',
    display: 'flex'
})

const PostPage = () =>{
    const basicButtonReaction = (name:string) => {
        console.log(name + " is clicked");
    }

    return (
        <PostPageBack className='back'>
            <LeftSpace>
                <FlagTitle>
                    🚩 this Page is TurtleNeck's <br/>Test PostPages.
                </FlagTitle>
            </LeftSpace>
            <PostPageSection>
                <PostPageContents>
                    <p>
                        (check Console Log.)
                    </p>
                    <button type='button' onClick={() => {basicButtonReaction("button1")}}>
                        1: ClickMe!
                    </button>
                    <button type='button' onClick={() => {basicButtonReaction("button2")}}>
                        2: ClickMe!
                    </button>
                    <ul>
                        <li>
                            <Link to="/">🚀 Go to Login Pages</Link>
                        </li>
                        <li>
                            <Link to="/post">📝 Go to post Pages</Link>
                        </li>
                        <li>
                            <Link to="/myinfo">👥 Go to Myinfo Pages</Link>
                        </li>
                    </ul>
                </PostPageContents>
        </PostPageSection>
    </PostPageBack>
    )
}

export default PostPage;
