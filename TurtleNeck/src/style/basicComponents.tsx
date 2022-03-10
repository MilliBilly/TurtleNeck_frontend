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
    display: 'flex',
    alignItems: 'center',
    justifyItems: 'center',
    '@tabletS':{
        width:'30vw'
    },
    '@mobile':{
        display:'none'
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
    '@tabletS':{
        width:'70vw'
    },
    '@mobile':{
        width:'100vw'
    }
})

export const PageContents = styled('span', {
    color:'Black',
    fontSize: '30px'
    // justifyContent: 'center'
});

export const FlagTitle = styled('span',{
    fontSize: '40px',
    display: 'block',
    width: '30rem',
    margin: 'auto',
    textAlign: 'center',
    '@tabletS':{
        // display: 'none'
        width: '10rem',
        fontSize: '1rem'
    }
})

export const LogoImg = styled('img', {
    width: '30rem',
    display: 'block',
    margin: 'auto',

    '@tabletS':{
        // display: 'none'
        width: '15rem'
    }
})

export const LeftWrapper = styled('div', {
    width: '100%'
})