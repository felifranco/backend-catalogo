import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id_product: number;

  @Column({ nullable: true })
  handle: string;

  @Column({ nullable: true })
  title: string;

  @Column({ nullable: true })
  description: string;

  @Column({ nullable: true, type: 'bigint' })
  sku: number;

  @Column({ nullable: true, type: 'decimal' })
  grams: number;

  @Column({ nullable: true })
  stock: number;

  @Column({ nullable: true, type: 'decimal' })
  price: number;

  @Column({ nullable: true, type: 'decimal' })
  compare_price: number;

  @Column({ nullable: true, type: 'bigint' })
  barcode: number;
}
