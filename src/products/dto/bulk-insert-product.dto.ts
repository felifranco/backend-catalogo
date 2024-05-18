import { CreateProductDto } from './create-product.dto';
import { ApiProperty } from '@nestjs/swagger';

export class BulkInsertProductDto {
  @ApiProperty()
  products: CreateProductDto[];
}
