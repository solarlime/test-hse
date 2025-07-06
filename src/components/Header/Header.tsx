import styled from 'styled-components';
import { observer } from 'mobx-react-lite';
import Switcher from '../shared/Switcher';
import LogoPart from './LogoPart';

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
  height: 48px;
  color: var(--black);
`;

const Header = observer(() => {
  return (
    <StyledHeader>
      <LogoPart />
      <Switcher.Root>
        <Switcher.Variant checked={true}>RU</Switcher.Variant>
        <Switcher.Variant>EN</Switcher.Variant>
      </Switcher.Root>
    </StyledHeader>
  );
});

export default Header;
