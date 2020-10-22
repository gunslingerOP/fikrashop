import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  CreateDateColumn,
  ManyToOne,
  BaseEntity,
} from "typeorm";
import { Category } from "./Category";
import { InvoiceItem } from "./InvoiceItem";

@Entity("products")
export class Product extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ type: "float" })
  price: number;

  @Column({ nullable: true })
  image: string;

  @Column()
  description: string;

  @Column()
  active: boolean;

  @Column()
  categoryID: number;

  @Column()
  @CreateDateColumn()
  createdAt: Date;

  @Column()
  @CreateDateColumn()
  updatedAt: Date;

  // -------------------------------- Relations --------------------------------

  @ManyToOne((type) => Category, (category) => category.products)
  category: Category;

  @OneToMany((type) => InvoiceItem, (item) => item.product)
  items: InvoiceItem[];
}
