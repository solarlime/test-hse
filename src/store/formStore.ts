import { makeAutoObservable } from 'mobx';

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

  private _values: { [key: string]: string } = {};

  getValue(id: string) {
    if (id in this._values) {
      return this._values[id];
    }
    return undefined;
  }

  setValue(id: string, value: string) {
    console.log(id, value);
    this._values[id] = value;
  }
}

export default FormStore;
