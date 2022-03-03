import React from 'react';
import {Link} from 'react-router-dom';
import { styled } from '@stitches/react';

const LoginPageBack = styled('div', {
    padding: '0',
    margin: '0',
    background: 'Olive',
    height: '100vh',
    display: 'flex'
})

const LoginPageSection = styled('div', {
    background: 'Ivory',
    width: '30rem',
    border: 'solid 1px',
    height: '100vh'
})

const LoginPageContents = styled('span', {
    color:'brown',
    fontSize: '30px'
});

const LeftSpace = styled('span',{
    padding: '0',
    margin: '0',
    background: 'olive',
    height: '100vh',
    width: '45vw',
    display: 'flex'
})

const FlagTitle = styled('span',{
    alignSelf:'center',
    fontSize: '40px'
})

const approveAndDecline = {
    variants: {
        approve: {
            true: {
                background: 'red'
            },
            false: {
                background: 'green'
            }
        }
    },
}

const Button = styled('button', {
    margin: '1rem'
})

const round = {
    borderRadius: '20%'
}

// const RoundButton = styled(Button, round, approveAndDecline)

const LoginPage: React.FC = () =>{

    const basicButtonReaction = (name:string) => {
        console.log(name + " is clicked");
    }

    return (
        <LoginPageBack className='back'>
            <LeftSpace>
                <FlagTitle>
                    🚩 this Page is TurtleNeck's <br/>Test LoginPages.
                </FlagTitle>
            </LeftSpace>
            <LoginPageSection>
                <LoginPageContents>
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
                </LoginPageContents>
            </LoginPageSection>
        </LoginPageBack>
    )
}

export default LoginPage;