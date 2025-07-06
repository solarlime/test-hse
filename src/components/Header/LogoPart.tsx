import styled from 'styled-components';
import { observer } from 'mobx-react-lite';
import { useContext } from 'react';
import CloseIcon from '../shared/CloseIcon';
import Logo from './Logo';
import { AppContext } from '../../AppContext';
import { useStore } from '../../store/StoreProvider';

const StyledLogoPart = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
`;

const LogoPart = observer(() => {
  const { isCompact } = useContext(AppContext);
  const { formStore } = useStore();

  return (
    <StyledLogoPart>
      {isCompact && formStore.isFormOpened && <CloseIcon />}
      <Logo />
    </StyledLogoPart>
  );
});

export default LogoPart;
