export interface ProductProps {
  brand: string;
  category: string;
  color: string;
  description: string;
  discount: number;
  id: number;
  image: string;
  model: string;
  price: number;
  title: string;
}

export type ProductsProps = ProductProps[];
