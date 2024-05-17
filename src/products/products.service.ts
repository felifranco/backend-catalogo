import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './entities/product.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SuccessfulProcess, ErrorProcess } from 'src/utils/response';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product)
    private readonly productRepo: Repository<Product>,
  ) {}

  async create(createProductDto: CreateProductDto) {
    try {
      const newProduct = this.productRepo.create(createProductDto);
      const result = await this.productRepo.save(newProduct);

      return SuccessfulProcess(result);
    } catch (exception) {
      return ErrorProcess(exception.message, null);
    }
  }

  async findAll() {
    try {
      const result = await this.productRepo.find();
      return SuccessfulProcess(result);
    } catch (exception) {
      return ErrorProcess(exception.message, null);
    }
  }

  async findOne(id: number) {
    try {
      const result = await this.productRepo.findOneBy({
        id_product: id,
      });
      return SuccessfulProcess(result);
    } catch (exception) {
      return ErrorProcess(exception.message, null);
    }
  }

  async update(id: number, updateProductDto: UpdateProductDto) {
    try {
      const updatedProduct = await this.productRepo.findOneBy({
        id_product: id,
      });

      if (updateProductDto.handle) {
        updatedProduct.handle = updateProductDto.handle;
      }

      if (updateProductDto.title) {
        updatedProduct.title = updateProductDto.title;
      }

      if (updateProductDto.description) {
        updatedProduct.description = updateProductDto.description;
      }

      if (updateProductDto.sku) {
        updatedProduct.sku = updateProductDto.sku;
      }

      if (updateProductDto.grams) {
        updatedProduct.grams = updateProductDto.grams;
      }

      if (updateProductDto.stock) {
        updatedProduct.stock = updateProductDto.stock;
      }

      if (updateProductDto.price) {
        updatedProduct.price = updateProductDto.price;
      }

      if (updateProductDto.compare_price) {
        updatedProduct.compare_price = updateProductDto.compare_price;
      }

      if (updateProductDto.barcode) {
        updatedProduct.barcode = updateProductDto.barcode;
      }

      const result = await this.productRepo.save(updatedProduct);
      return SuccessfulProcess(result);
    } catch (exception) {
      return ErrorProcess(exception.message, null);
    }
  }

  async remove(id: number) {
    try {
      const deletedProduct = await this.productRepo.findOneBy({
        id_product: id,
      });

      const result = await this.productRepo.remove(deletedProduct);
      return SuccessfulProcess(result);
    } catch (exception) {
      return ErrorProcess(exception.message, null);
    }
  }
}
