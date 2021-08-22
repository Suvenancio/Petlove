import React from 'react'
import * as S from './Header.styles'
import logo from '../../assets/paw.png'

const Header = () => {
    return (
        <S.Container>
             <S.Logo>
                <img src={logo} alt=""/>
                <S.Link href='/'>
                    <h1>Pet Love</h1>
                </S.Link>
            </S.Logo>
            <S.Nav>
              
                <S.Link href='/pets'>PETS</S.Link>
                <S.Link href='/quemsomos'>QUEM SOMOS</S.Link>
                <S.Link href='/contato'>CONTATO</S.Link>
              
            </S.Nav>
        </S.Container>
    )
}

export default Header
