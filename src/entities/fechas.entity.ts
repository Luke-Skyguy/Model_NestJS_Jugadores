import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

export class AbstractFechas {
  constructor(params: AbstractFechas) {
    if (params) {
      this.dataAlta =
        params?.dataAlta || new Date().toISOString().split('T')[0];
      this.dataLastEdit = params?.dataLastEdit || undefined;
    }
  }
  @Column({ nullable: true })
  dataAlta?: string;
  @Column({ nullable: true })
  dataLastEdit?: string;
}
