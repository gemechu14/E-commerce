import { Add, Remove } from "@material-ui/icons";
import styled from "styled-components";

import Footers from "../Components/Footers";
//import Navbar from "../Components/Navbar";
import Newsletter from "../Components/Newsletter";
import img4 from '../images/sofa3.jpg'

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
 
`;

const ImgContainer = styled.div`
  flex: 1;
`;

const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;

`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
 
`;

const Title = styled.h1`
  font-weight: 200;
`;

const Desc = styled.p`
  margin: 20px 0px;
`;

const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`;

const FilterContainer = styled.div`
  width: 50%;
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
 
`;









const AddContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;

`;

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;

const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`;

const Button = styled.button`
  padding: 15px;
  border: 2px solid teal;
  background-color: white;
  cursor: pointer;
  font-weight: 500;

  &:hover{
      background-color: #f8f4f4;
  }
`;

const Product = () => {
  return (
    <Container>
    
    
      <Wrapper>
        <ImgContainer>
          <Image src={img4} />
        </ImgContainer>
        <InfoContainer>
          <Title>Sofa</Title>
          <Desc>
            Best Sofa with good price dont miss
          </Desc>
          <Price>35 birr</Price>
          <FilterContainer>
           
           
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <Remove />
              <Amount>1</Amount>
              <Add />
            </AmountContainer>
            <Button>ADD TO CART</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <Newsletter />
      <Footers />
    </Container>
  );
};

export default Product;
