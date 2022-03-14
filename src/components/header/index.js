import DropDownButton from "../dropDownButton";
import styled from "styled-components";

const Header = () => {
  return (
    <HeaderContainer>
      <Path>Path</Path>

      <Menu>Lorem ipsum dolor sit
          <DropDownButton/>
      </Menu>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.div`
  height: 7vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 6px 12px;
`;

const Path = styled.div`
  padding: 0 6px;
`;

const Menu = styled.div`
  flex: 1;
  padding: 0 6px;
`;

export default Header;
