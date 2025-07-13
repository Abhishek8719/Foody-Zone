import React from 'react'
import styled from "styled-components";
import { BASE_URL } from "../../App"; // Importing the BASE_URL from App.jsx
import { Button } from '../../App'; // Importing the Button component from App.jsx


export const SearchResult = ({ data }) => {
  return (
    <div>
        
          <FoodCardContainer>

            <FoodCards>
             {data?.map(({name,image, text, price}) => (
                <FoodCard key={name}> 
                  <div className='food_image'>
                    <img src={`${BASE_URL}${image}`} alt={name} />
                       </div>
                        <div className='food_info'>
                          <h3>{name}</h3>
                             <p>{text}</p>
                      </div>
                          <div className='food_price'>
                    
                  </div>
                  <Button>${price?.toFixed ? price.toFixed(2) : price} </Button>
                </FoodCard>
             ))}
            </FoodCards>
          </FoodCardContainer>
    </div>
  )
}


const FoodCardContainer = styled.div`
min-height: calc(100vh - 210px);
background-image: url("./BackGround.png");
background-size: cover;
background-position: center;
padding: 16px;

`
const FoodCards = styled.div`
display: flex;
flex-wrap: wrap;    
justify-content: center;
align-items: center;
`
const FoodCard = styled.div`
  border: 1px solid #eee;
  color: black;
  border-radius: 8px;
  padding: 16px;
  margin: 16px;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  .food_info {
    margin-top: 8px;
    text-align: left;
    align-self: flex-start;
  }

  .food_price {
    text-align: right;
    align-self: flex-end;
  }
`;
