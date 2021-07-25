import styled from "styled-components"
import HeroDesktop from "../images/image-hero-desktop.jpg"
import HeroMobile from "../images/image-hero-mobile.jpg"

const Img = styled.div`
background-image: url(${HeroDesktop});
background-repeat: no-repeat;
background-position: top;
background-size: cover;
width: 100%;
height: 65vh;
position: absolute;
object-fit: cover;
z-index: -1;
@media (max-width: 768px){
    background-image: url(${HeroMobile});
}
`;

const Back = () => {
    return(
        <div>
            <Img></Img>
        </div>
    )
}

export default Back