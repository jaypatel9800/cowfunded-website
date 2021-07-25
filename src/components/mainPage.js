import styled from "styled-components"
import First from "./mainpage/first"
// import Second from "./mainpage/second"
// import Third from "./mainpage/third"

const Div = styled.div`
margin-top: 30vh;
`;
const mainPage = () => {
    return(
        <Div>
            <First/>
            {/* <Second/>
            <Third/> */}
        </Div>
    )
}

export default mainPage