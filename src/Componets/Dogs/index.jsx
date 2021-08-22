import React, {useState, useEffect} from 'react'
import * as S from './Dogs.styles'

const Dogs = () => {

    const [ dadosApi, setDadosApi] = useState([])
    const [ apiChegou, setApichegou] = useState(false)

    useEffect(() => {
        fetch('https://limitless-badlands-52367.herokuapp.com/pets/dogs')
        .then((res) => res.json())
        .then((result) =>{
            setDadosApi(result)
            setApichegou(true)
        })  
    }, [])

    return (
        <S.Container>
            { !!dadosApi && apiChegou ? (
                dadosApi.map((item) =>{
                    console.log(item.NOME)
                })
            ) : (<p>Carregando</p>)

            } 
        </S.Container>
    )
}

export default Dogs
