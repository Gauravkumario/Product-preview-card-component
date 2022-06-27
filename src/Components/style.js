import styled from "styled-components"
import {  BackgroundImageDesktop, BackgroundImageMobile } from "../Components/Images";

const MainBlock = styled.div`
    width: 40.25rem;
    height: 28.875rem;
    display: flex;
    flex-direction: row;
    margin: auto;
    overflow: hidden;
    margin-top: 10rem;
    background-color: #FFFFFF;
    border-radius: 0.75rem;
    @media (max-width: 520px){
        width: 80%;
        margin-top: 4rem;
        flex-direction: column;
        height: auto;
    }
`
const BlockLeft = styled.div`
    width: 50%;
    height: 100%;
    background-image: ${({ bgImage }) => (bgImage || `url("${BackgroundImageDesktop}")`)};
    background-repeat: no-repeat;
    background-size: cover;
    @media (max-width: 520px){
        width: 100%;
        height: 15rem;
        background-image: ${({ bgImage }) => (bgImage || `url("${BackgroundImageMobile}")`)};
        background-repeat: no-repeat;
        background-size: 100% cover;
        background-position: center; 
    }
`

const BlockRight = styled.div`
    width: 50%;
    height: 100%;
    padding: 1.5rem;
    @media (max-width: 520px){
        width: 100%;
        height: auto;      
    }
`

const ProductType = styled.h1`
    color: hsl(228, 12%, 48%);
    font-size: 0.9rem;
    font-family: "Montserrat", serif;
    font-weight: 500;
    letter-spacing: 0.15rem;
    margin-bottom: 1rem;
`
const ProductName = styled.h2`
    color: hsl(212, 21%, 14%);
    font-size: 2rem;
    font-family: "Fraunces", sans-serif;
    font-weight: 700;
    margin-bottom: 1rem;
    @media (max-width:520px){
        font-size: 1.6rem;
    }
`
const ProductPara = styled.p`
    color: hsl(228, 12%, 48%);
    line-height: 1.5rem;
    margin-bottom: 1.5rem;
    font-size: 0.9rem;
    font-weight: 500;
    font-family: "Montserrat", sans-serif;
    @media (max-width:520px){
        font-size: 0.7rem;
    }
`

const PriceTag = styled.div`
    margin-top: 1.6rem;
    display: flex;
    align-items: center;
`

const DiscountPrice = styled.span`
    color: hsl(158, 36%, 37%);
    font-size: 2rem;
    font-weight: 700;
    font-family: 'Fraunces', sans-serif;
`
const ActualPrice = styled.span`
    color: hsl(228, 12%, 48%);
    text-decoration: line-through;
    margin-left: 2rem;
    font-size: 1rem;
    font-weight: 500;
    font-family: 'Montserrat', sans-serif;
`

const Button = styled.button`
    width: 100%;
    padding: 1rem;
    margin-top: 1.5rem;
    cursor: pointer;
    border-radius: 0.5rem;
    border: none;
    color: #ffffff;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: hsl(158, 36%, 37%);
    font-weight: 700;
    font-family: "Montserrat", sans-serif;
    &:hover{
        background-color: #1A4031;
    }
`
const CartBtnTxt = styled.span`
    font-size: 1rem;
    margin-left: 0.5rem;
`

export {
    MainBlock,
    BlockLeft,
    BlockRight,
    ProductType,
    ProductName,
    ProductPara,
    PriceTag,
    DiscountPrice,
    ActualPrice,
    Button,
    CartBtnTxt
};