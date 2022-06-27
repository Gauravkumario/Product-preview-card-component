import React from "react";
import '../App.css';
import { MainBlock, BlockLeft, BlockRight, ProductType, ProductName, ProductPara, PriceTag, DiscountPrice, ActualPrice, Button, CartBtnTxt } from "../Components/style";
import { AiOutlineShoppingCart } from 'react-icons/ai'

const Container = () => {
  return (
    <MainBlock>
      <BlockLeft></BlockLeft>
      <BlockRight>
        <ProductType>PERFUME</ProductType>
        <ProductName>Gabrielle Essence Eau De Parfum</ProductName>
        <ProductPara>
          A floral, solar and voluptuous interpretation composed by Olivier
          Polge, Perfumer-Creator for the House of CHANEL.
        </ProductPara>
        <PriceTag>
          <DiscountPrice>$149.99</DiscountPrice>
          <ActualPrice>$169.99</ActualPrice>
        </PriceTag>
        <Button>
          <AiOutlineShoppingCart size={24} /><CartBtnTxt>Add to Cart</CartBtnTxt>
        </Button>
      </BlockRight>
    </MainBlock>
  );
};

export default Container;
