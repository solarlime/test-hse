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
}

export default FormStore;
