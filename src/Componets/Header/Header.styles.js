import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    height: 70%;

    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 15px;

    background-color: ${p => p.theme.cores.info};

    > h1{
        color: red
    }
    > p{
        color: blue;
    }
`
export const Logo = styled.div` 
    display: flex;
    align-items: center;
    justify-content: flex-end;
    >img{
        width: 50px;
    }


`
export const Nav = styled.div`
    width: 30%;
    height: 100%;

    display: flex;
    align-items: center;
    justify-content: space-around;
`
export const Link = styled.a`
    text-decoration: none;
    color: ${p => p.theme.cores.preto};
`

