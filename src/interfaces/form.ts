export type TCommonFields = {
  id: string;
  label: string;
  placeholder: string;
  required: boolean;
};

export type TInput = TCommonFields & {
  type: 'text' | 'number';
};

type TFileInfo = { type: 'file' } & (
  | {
      multiple: false;
    }
  | {
      multiple: true;
      minFiles: number;
      maxFiles: number;
    }
);

export type TFileInput = TCommonFields & TFileInfo;

export type TDropdown = TCommonFields & {
  type: 'dropdown';
  options: string[];
};

export interface IImage {
  id: string;
  file: File;
  src: string;
}

type TValues = {
  required: boolean;
  isValid: boolean;
};

export interface IStringValues extends TValues {
  value: string;
  range: undefined;
}

export interface IFileValues extends TValues {
  value: IImage[];
  range: TRange | undefined;
}

type TRange = { minFiles: number; maxFiles: number };

export type TCreateValues = TValues &
  (
    | {
        isFile: false;
        range: undefined;
      }
    | {
        isFile: true;
        range: undefined;
      }
    | {
        isFile: true;
        range: TRange;
      }
  );
