import { makeAutoObservable } from 'mobx';
import {
  IFileValues,
  IImage,
  IStringValues,
  TCommonFields,
  TCreateValues,
} from '../interfaces/form';

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

  private _values: {
    [key: string]: IStringValues | IFileValues;
  } = {};

  createValue(id: string, values: TCreateValues) {
    if (values.isFile) {
      this._values[id] = {
        required: values.required,
        value: [],
        isValid: values.isValid,
        range: values.range,
      };
    } else {
      this._values[id] = {
        required: values.required,
        value: '',
        isValid: values.isValid,
        range: values.range,
      };
    }
  }

  // Yeah, I know. But I want to have less type assertions in code
  getStringValue(id: string) {
    if (id in this._values && typeof this._values[id].value === 'string') {
      return (this._values[id] as IStringValues).value;
    }
    return undefined;
  }

  getFileValue(id: string) {
    if (id in this._values && Array.isArray(this._values[id].value)) {
      return (this._values[id] as IFileValues).value;
    }
    return undefined;
  }

  setStringValue(id: string, value: string) {
    if (id in this._values) {
      if (typeof this._values[id].value === 'string') {
        this._values[id] = { ...(this._values[id] as IStringValues), value };
      } else {
        console.error(
          'Вы пытаетесь сохранить строку в поле, которое содержит иные данные!',
        );
      }
    }
  }

  private _validateFiles = (id: TCommonFields['id'], record: IFileValues) => {
    if (record.range) {
      if (
        record.value.length >= record.range.minFiles &&
        record.value.length <= record.range.maxFiles
      ) {
        this.setValidity(id, true);
      } else {
        this.setValidity(id, false);
      }
    } else {
      if (record.value.length === 0) {
        this.setValidity(id, false);
      } else {
        this.setValidity(id, true);
      }
    }
  };

  setFileValue(id: string, files: IImage[]) {
    if (id in this._values) {
      if (Array.isArray(this._values[id].value)) {
        this._values[id].value.push(...files);
        this._validateFiles(id, this._values[id] as IFileValues);
      } else {
        console.error(
          'Вы пытаетесь сохранить файлы в поле, которое содержит иные данные!',
        );
      }
    }
  }

  removeFile(id: string, fileId: string) {
    if (id in this._values && Array.isArray(this._values[id].value)) {
      this._values[id].value = this._values[id].value.filter(
        (image) => image.id !== fileId,
      );
      this._validateFiles(id, this._values[id] as IFileValues);
    }
  }

  getValidity(id: string) {
    if (id in this._values) {
      return this._values[id].isValid;
    }
    return undefined;
  }

  setValidity(id: string, isValid: boolean) {
    if (id in this._values) {
      this._values[id].isValid = isValid;
    }
  }

  get canSubmit() {
    return Object.values(this._values).every((value) => {
      return value.isValid;
    });
  }

  get dataToSend() {
    return Object.fromEntries(
      Object.entries(this._values).map(({ 0: key, 1: record }) => [
        key,
        record.value,
      ]),
    );
  }
}

export default FormStore;
