export interface ICommonFields {
  id: string;
  label: string;
  placeholder: string;
  required: boolean;
}

export interface IInput extends ICommonFields {
  type: 'text' | 'number' | 'file';
}

export interface IDropdown extends ICommonFields {
  type: 'dropdown';
  options: string[];
}

export interface IImage {
  id: string;
  file: File;
  src: string;
}
