import React from 'react';
import {Link} from 'react-router-dom';
import {PageBack, PageContents, PageSection, LeftSpace, FlagTitle, LogoImg} from '../style/basicComponents';

const PostPage = () =>{
    const basicButtonReaction = (name:string) => {
        console.log(name + " is clicked");
    }

    return (
        <PageBack className='back'>
            <LeftSpace>
                <LogoImg src='./src//images/TurtleNeck.png'>
                </LogoImg>
                <FlagTitle>
                    🚩 this Page is TurtleNeck's <br/>Test PostPages.
                </FlagTitle>
            </LeftSpace>
            <PageSection>
                <PageContents>
                    <p>
                        -> If you check the button's work, <br/>check Console Log
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
                </PageContents>
        </PageSection>
    </PageBack>
    )
}

export default PostPage;
