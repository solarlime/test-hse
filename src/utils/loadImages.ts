import { v4 as uuidv4 } from 'uuid';
import { IImage } from '../interfaces/form';

const VALID_MIME_TYPES = ['image/jpeg'];

function isFileMimeTypeValid(file: File) {
  return VALID_MIME_TYPES.includes(file.type);
}

function isImageResolutionValid(image: HTMLImageElement) {
  return image.height < 1500;
}

async function loadImages(files: FileList | null) {
  if (files) {
    return Promise.allSettled(
      Array.from(files).map((file): Promise<IImage> => {
        return new Promise((resolve, reject) => {
          const img = new Image();
          const url = URL.createObjectURL(file);

          const onLoad = function (this: HTMLImageElement) {
            const isMimeTypeValid = isFileMimeTypeValid(file);
            const isResolutionValid = isImageResolutionValid(this);
            if (isResolutionValid && isMimeTypeValid) {
              img.removeEventListener('error', onError);
              resolve({ id: uuidv4(), file, src: url });
            } else {
              img.removeEventListener('error', onError);
              URL.revokeObjectURL(url);
              reject(
                isMimeTypeValid
                  ? 'Неверный тип файла'
                  : 'Слишком большое разрешение изображения',
              );
            }
          };

          const onError = function (error: ErrorEvent) {
            img.removeEventListener('load', onLoad);
            URL.revokeObjectURL(url);
            reject(error.message);
          };

          img.addEventListener('load', onLoad, { once: true });

          img.addEventListener('error', onError, { once: true });
          img.src = url;
        });
      }),
    );
  }
  return [];
}

export { loadImages };
