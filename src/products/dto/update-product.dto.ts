import { PartialType } from '@nestjs/mapped-types';
import { CreateProductDto } from './create-product.dto';

export class UpdateProductDto extends PartialType(CreateProductDto) {
  handle: string;

  title: string;

  description: string;

  sku: number;

  grams: number;

  stock: number;

  price: number;

  compare_price: number;

  barcode: number;
}
