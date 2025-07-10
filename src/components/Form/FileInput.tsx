import styled from 'styled-components';
import { observer } from 'mobx-react-lite';
import { HTMLProps } from 'react';
import { TCommonFields, TFileInput, IImage } from '../../interfaces/form';
import { buttonStyle } from '../shared/Button';
import Plus from '../../assets/plus.svg?react';
import { loadImages } from '../../utils/loadImages';
import { useStore } from '../../store/StoreProvider';
import FloatingButton from '../shared/FloatingButton';
import Delete from '../../assets/delete.svg?react';
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
  input[multiple] ~ div & {
    width: auto;
    height: 160px;
  }

  input:not([multiple]) ~ div & {
    width: 300px;
    height: 424px;
    object-fit: cover;
  }
`;

const StyledFileInputLabel = styled.label`
  input[multiple] ~ & {
    background-color: var(--white);
    color: var(--black);
    border-color: var(--black);
    box-sizing: border-box;
    cursor: pointer;

    ${buttonStyle}
  }

  input:not([multiple]) ~ & {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    width: 100%;
    max-width: 300px;
    max-height: 424px;
    aspect-ratio: 0.7075;
    background-color: var(--black5);
    color: var(--black47);
    font-size: 13px;
    line-height: 16px;
    cursor: pointer;
  }

  input:not([multiple]) ~ div:has(div) ~ & {
    display: none;
  }
`;

const StyledFileInput = styled.input`
  position: absolute;
  left: -9999px;
`;

const FileInput = observer(
  ({
    id,
    type,
    multiple = false,
    placeholder,
  }: {
    id: TCommonFields['id'];
    type: TFileInput['type'];
    multiple?: boolean;
    placeholder: TCommonFields['placeholder'];
  } & HTMLProps<HTMLInputElement>) => {
    const { formStore } = useStore();

    return (
      <StyledFileInputContainer>
        <StyledFileInput
          id={id}
          type={type}
          accept="image/jpeg"
          multiple={multiple}
          onChange={async (event) => {
            const results = await loadImages(event.target.files, multiple);
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
        <StyledLoadedImages>
          {formStore.getFileValue(id)?.map((image) => (
            <StyledLoadedImageContainer key={image.id}>
              {multiple ? (
                <>
                  <FloatingButton
                    $positionX="right"
                    $positionY="top"
                    onClick={() => formStore.removeFile(id, image.id)}
                    type="button"
                  >
                    <CloseSmall />
                  </FloatingButton>
                </>
              ) : (
                <>
                  <FloatingButton
                    $positionX="right"
                    $positionY="top"
                    onClick={() => formStore.removeFile(id, image.id)}
                    type="button"
                  >
                    <Delete />
                  </FloatingButton>
                </>
              )}
              <StyledLoadedImage id={image.id} src={image.src} alt="" />
            </StyledLoadedImageContainer>
          ))}
        </StyledLoadedImages>
        {(!multiple ||
          (formStore.getRange(id) &&
            formStore.getFileValue(id) &&
            formStore.getRange(id)!.maxFiles >
              formStore.getFileValue(id)!.length)) && (
          <StyledFileInputLabel htmlFor={id}>
            {multiple && <Plus />}
            {placeholder}
          </StyledFileInputLabel>
        )}
      </StyledFileInputContainer>
    );
  },
);

export default FileInput;
