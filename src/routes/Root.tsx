import { Outlet } from "react-router-dom";
import styled from 'styled-components';
import { Header } from '../components/header/Header';
import { Footer } from '../components/footer/Footer';

const StyledRoot  = styled.main`
  display: grid;
  height: 100vh;
  grid-template-rows: 100px 1fr 50px;
  grid-template-columns: 1fr 1fr;
  grid-template-areas:
  "header header"
  "instructions code"
  "footer footer";
`;

export function Root() {
  return (
    <StyledRoot>
      <Header />
      <Outlet />  {/* Where react-router renders the child components */}
      <Footer />
    </StyledRoot>
  )
}

// I need to use static site generator for this with pages (e.g., Gatsby)
// You can redirect the 404 within S3, but that's hacky
// I will need to put a CloudFront in front of it anyways, so I might as well go this route.