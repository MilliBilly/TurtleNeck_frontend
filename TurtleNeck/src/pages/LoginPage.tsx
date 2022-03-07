import React from 'react';
import {Link} from 'react-router-dom';
import {PageBack, PageContents, PageSection, LeftSpace, FlagTitle, LogoImg, LeftWrapper} from '../style/basicComponents';

// const LoginPageBack = styled('div', {
//     padding: '0',
//     margin: '0',
//     background: 'Olive',
//     height: '100vh',
//     display: 'flex'
// })

// const LoginPageSection = styled('div', {
//     background: 'Ivory',
//     width: '30rem',
//     border: 'solid 1px',
//     height: '100vh',
//     '@mobile':{
//         width:'100vw'
//     },
// })

// const LoginPageContents = styled('span', {
//     color:'brown',
//     fontSize: '30px'
// });

// const LeftSpace = styled('span',{
//     padding: '0',
//     margin: '0',
//     background: 'olive',
//     height: '100vh',
//     width: '50vw',
//     display: 'flex',

//     '@mobile':{
//         display:'none'
//     },
//     '@tabletS':{
//         width:'25vw',
//     }
// })

// const FlagTitle = styled('span',{
//     alignSelf:'center',
//     fontSize: '40px'
// })

// const approveAndDecline = {
//     variants: {
//         approve: {
//             true: {
//                 background: 'red'
//             },
//             false: {
//                 background: 'green'
//             }
//         }
//     },
// }

// const Button = styled('button', {
//     margin: '1rem'
// })

// const round = {
//     borderRadius: '20%'
// }

// const RoundButton = styled(Button, round, approveAndDecline)

const LoginPage: React.FC = () =>{

    const basicButtonReaction = (name:string) => {
        console.log(name + " is clicked");
    }

    return (
        <PageBack className='back'>
            <LeftSpace>
                <LeftWrapper>   
                    <LogoImg src='./src//images/TurtleNeck.png'>
                    </LogoImg>
                    <div>
                        <FlagTitle>
                            🚩 Test LoginPages.
                        </FlagTitle>
                    </div>
                </LeftWrapper>
            </LeftSpace>
            <PageSection>
                <PageContents>
                    <p>
                        - If you check the button's work, <br/>check Console Log
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

export default LoginPage;