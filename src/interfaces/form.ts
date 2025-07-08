export interface ICommonFields {
  id: string;
  label: string;
  placeholder: string;
  required: boolean;
}

export interface IInput extends ICommonFields {
  type: 'text' | 'number';
}

export interface IDropdown extends ICommonFields {
  type: 'dropdown';
  options: string[];
}
