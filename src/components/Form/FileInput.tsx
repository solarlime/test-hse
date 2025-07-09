import styled from 'styled-components';
import { observer } from 'mobx-react-lite';
import { HTMLProps } from 'react';
import { ICommonFields, IImage, IInput } from '../../interfaces/form';
import { buttonStyle } from '../shared/Button';
import Plus from '../../assets/plus.svg?react';
import { loadImages } from '../../utils/loadImages';
import { useStore } from '../../store/StoreProvider';
import FloatingButton from '../shared/FloatingButton';
import CloseSmall from '../../assets/close-small.svg?react';

const StyledFileInputContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 8px;

  &:has(input:focus-visible) label {
    outline: var(--red) solid 2px;
    outline-offset: 1px;
  }
`;

const StyledLoadedImages = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;

  &:not(:has(*)) {
    display: none;
  }
`;

const StyledLoadedImageContainer = styled.div`
  position: relative;
`;

const StyledLoadedImage = styled.img`
  width: auto;
  height: 160px;
`;

const StyledFileInputLabel = styled.label`
  ${buttonStyle}

  background-color: var(--white);
  color: var(--black);
  border-color: var(--black);
  box-sizing: border-box;
  cursor: pointer;
`;

const StyledFileInput = styled.input`
  position: absolute;
  left: -9999px;
`;

const FileInput = observer(
  ({
    id,
    type,
    placeholder,
  }: {
    id: ICommonFields['id'];
    type: IInput['type'];
    placeholder: ICommonFields['placeholder'];
  } & HTMLProps<HTMLInputElement>) => {
    const { formStore } = useStore();

    return (
      <StyledFileInputContainer>
        <StyledLoadedImages>
          {(formStore.getValue(id) as IImage[] | undefined)?.map((image) => (
            <StyledLoadedImageContainer key={image.id}>
              <FloatingButton
                $positionX="right"
                $positionY="top"
                onClick={() => formStore.removeFile(id, image.id)}
                type="button"
              >
                <CloseSmall />
              </FloatingButton>
              <StyledLoadedImage id={image.id} src={image.src} alt="" />
            </StyledLoadedImageContainer>
          ))}
        </StyledLoadedImages>
        <StyledFileInputLabel htmlFor={id}>
          <Plus />
          {placeholder}
        </StyledFileInputLabel>
        <StyledFileInput
          id={id}
          type={type}
          accept="image/jpeg"
          multiple
          onChange={async (event) => {
            const results = await loadImages(event.target.files);
            const fulfilled: IImage[] = [];
            const rejected = new Set<string>();
            results.forEach((promiseResult) => {
              if (promiseResult.status === 'fulfilled') {
                fulfilled.push(promiseResult.value);
              } else {
                rejected.add(promiseResult.reason);
              }
            });
            formStore.setFileValue(id, fulfilled);
            if (rejected.size > 0) {
              alert(
                `Часть фотографий не была загружена. ${Array.from(rejected).reduce((accumulator, current) => `\n${current + accumulator}`, '')}`,
              );
            }
          }}
        />
      </StyledFileInputContainer>
    );
  },
);

export default FileInput;
