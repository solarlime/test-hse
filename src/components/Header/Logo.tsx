import styled from 'styled-components';
import { observer } from 'mobx-react-lite';
import hseLogo from '../../assets/hse-logo.svg';

const StyledLogo = styled.h1`
  display: flex;
  width: auto;
  height: 16px;
  padding: 0;
  margin: 0;
`;

const Logo = observer(() => {
  return (
    <StyledLogo>
      <img src={hseLogo} alt="Higher School of Economics's logo" />
    </StyledLogo>
  );
});

export default Logo;
