export interface Car{
    _id: string;
    brand: string;
    model: string;
    package: string;
    color: string;
    year: number;
    category: string;
    price: number;
    description: string;
    id:string;
}

export interface FormInputProps {
    name: string;
    control: any;
    label: string;
    setValue?: any;
  }