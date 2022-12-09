import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { v4 as uuid } from "uuid";
import { Contact } from "./contacts.entity";

@Entity("users")
export class User {
  @PrimaryGeneratedColumn("uuid")
  readonly id: string;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  email: string;

  @Column()
  phone: string;

  @Column()
  created_at: Date;

  @Column()
  updated_at: Date;

  @OneToMany((type) => Contact, (contact) => contact.user, {
    eager: true,
    onDelete: "CASCADE",
  })
  contacts: Contact[];

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}
