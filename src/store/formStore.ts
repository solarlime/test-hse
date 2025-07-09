import { makeAutoObservable } from 'mobx';
import { IImage } from '../interfaces/form';

class FormStore {
  constructor() {
    makeAutoObservable(this);
  }

  private _isFormOpened = false;

  get isFormOpened() {
    return this._isFormOpened;
  }

  setIsFormOpened(value: boolean) {
    this._isFormOpened = value;
  }

  private _values: { [key: string]: string | IImage[] } = {};

  getValue(id: string) {
    if (id in this._values) {
      return this._values[id];
    }
    return undefined;
  }

  setValue(id: string, value: string) {
    this._values[id] = value;
  }

  setFileValue(id: string, files: IImage[]) {
    if (id in this._values) {
      if (Array.isArray(this._values[id])) {
        this._values[id].push(...files);
      } else {
        console.error(
          'Вы пытаетесь сохранить файлы в поле, которое содержит иные данные!',
        );
      }
    } else {
      this._values[id] = files;
    }
  }

  removeFile(id: string, fileId: string) {
    if (id in this._values && Array.isArray(this._values[id])) {
      this._values[id] = this._values[id].filter(
        (image) => image.id !== fileId,
      );
    }
  }
}

export default FormStore;
