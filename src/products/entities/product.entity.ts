import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id_product: number;

  @Column()
  handle: string;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  sku: number;

  @Column()
  grams: number;

  @Column()
  stock: number;

  @Column()
  price: number;

  @Column()
  compare_price: number;

  @Column()
  barcode: number;
}
