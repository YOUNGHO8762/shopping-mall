import styled from 'styled-components';
import NavBar from './NavBar';

interface Props {
  children: React.ReactNode;
}

function Layout({ children }: Props) {
  return (
    <>
      <NavBar />
      <Main>{children}</Main>
    </>
  );
}

export default Layout;

const Main = styled.main`
  padding-top: 70px;
`;
