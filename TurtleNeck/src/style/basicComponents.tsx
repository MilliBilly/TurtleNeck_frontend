import {styled} from './theme';

export const PageBack = styled('div', {
    padding: '0',
    margin: '0',
    background: '#FFFFFF',
    height: '100vh',
    display: 'flex'
})

export const LeftSpace = styled('div',{
    padding: '0',
    margin: '0',
    background: '#FFFFFF',
    height: '100vh',
    width: '50vw',
    display: 'block',

    '@mobile':{
        display:'none'
    },
    '@tabletS':{
        width:'25vw',
    }
})

export const PageSection = styled('div', {
    background: '#71D4D0',
    width: '30rem',
    border: 'solid 1px',
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    '@mobile':{
        width:'100vw'
    },
})

export const PageContents = styled('span', {
    color:'Black',
    fontSize: '30px'
    // justifyContent: 'center'
});

export const FlagTitle = styled('div',{
    fontSize: '40px'
})

export const LogoImg = styled('img', {
    width: '30rem',
    display: 'block',
    '@tabletS':{
        // display: 'none'
        width: '10rem'
    }
})