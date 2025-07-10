import styled from 'styled-components';
import { observer } from 'mobx-react-lite';
import { lazy, Suspense } from 'react';
import Header from './Header/Header';
import Button from './shared/Button';
import { useStore } from '../store/StoreProvider';

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  flex-grow: 1;
  width: 100%;
  margin: 0 auto;
  padding: 0 10px;
  box-sizing: border-box;
`;

const Form = lazy(() => import('./Form/Form'));

const Page = observer(() => {
  const { formStore } = useStore();

  return (
    <>
      <Header />
      <Main>
        {!formStore.isFormOpened ? (
          <>
            <p>
              Какой-то очень большой текст, объясняющий, в каком мероприятии
              человек будет участвовать. Он должен быть достаточно длинным,
              чтобы заполнить пространство и дать понять, что здесь будет форма
              для заполнения. При этом он не должен отпугнуть потенциальных
              участников.
            </p>
            <p>
              К моменту прочтения этого текста у потенциального участника должно
              сформироваться понимание того, что от него требуется. Кроме того,
              должно быть ясно, что он получит в результате участия в
              мероприятии. В случае, если всё понятно, то можно нажать на кнопку
              ниже, чтобы начать заполнение анкеты участника.
            </p>
            <Button
              $type="primary"
              onClick={() => formStore.setIsFormOpened(true)}
              type="button"
            >
              Открыть анкету
            </Button>
          </>
        ) : (
          <Suspense fallback={<div>Загрузка анкеты...</div>}>
            <Form />
          </Suspense>
        )}
      </Main>
    </>
  );
});

export default Page;
