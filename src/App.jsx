import styled from "styled-components";
 import { useState, useEffect} from "react";
import { SearchResult } from "./componets/SearchResult/SearchResult";

 export const BASE_URL = "http://localhost:9000"; // Api endpoints 


 const App = () => {
  const [filterData, setFilterData] = useState([]);
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchFoodData = async () => {
      try {
        const response = await fetch(`${BASE_URL}`);
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const result = await response.json();
        console.log(result);
        setData(result);
        setFilterData(result); // Initialize filterData with the fetched data
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchFoodData();
  }, []);
  
      const filterFood = (type) => {
        if (type === "ALL") {
          setFilterData(data); // Reset to original data
        } else {
          const filtered = data?.filter((food) => food.type?.toLowerCase() === type.toLowerCase());
          setFilterData(filtered);
        }
      };
      const searchFood = (e) => {
        const searchValue = e.target.value.toLowerCase();
        if (searchValue === "") {
          setFilterData(data); // Reset to original data if search is empty
        } else {
          const filtered = data?.filter(({ name }) => name.toLowerCase().includes(searchValue));
          setFilterData(filtered);
        }
      };
      return (
      <>
        <Container>

          <TopContainer>
            <div className="logo">

              <img src="./Foody Zone.png" alt="logo" />
            </div>

            <div className="search">

              <input onChange={searchFood} placeholder="Search food..." />
            </div>

          </TopContainer>
          
          <FilterContainer>
            <Button onClick={() => filterFood("ALL")}> ALL</Button>
            <Button onClick={() => filterFood("Breakfast")}> Breakfast</Button>
            <Button onClick={() => filterFood("Lunch")}> Lunch</Button>
            <Button onClick={() => filterFood("Dinner")}> Dinner</Button>

          </FilterContainer>

           <SearchResult data={filterData} />

        </Container>


      </>
    );
  }
export default App;

const Container = styled.div`
width: 100%;
margin:0 auto;
  
`
const TopContainer = styled.div`
min-height: 140px;
background-color:gray;
display: flex;
justify-content:space-between;
padding: 16px;
align-items: center;
.logo{
  margin-left: 50px;
  margin-top: 10px;

}

.search{
  input {
    background-color: white;
    border:1px solid red ;
    color: black;
    border-radius:5px;
    font-size: 16px;
    height: 40px;
    padding :0 10px;
    margin-right: 70px;
    margin-top: 10px;

  }
}
`
const FilterContainer = styled.div`
display: flex;
justify-content: center;
gap: 12px; 
align-items: center;
padding-bottom: 16px;
`
export const Button = styled.button`
background-color: red;
color: white;
border: none;
border-radius: 5px;
padding: 6px 12px;
font-size: 16px;
cursor: pointer;

&:hover {
  background-color: darkred;
}

`
