import { IsDate, IsDefined, IsString, MinLength } from 'class-validator';
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @IsDefined({ always: true })
  @IsString({ always: true })
  @MinLength(1, { always: true })
  username: string;

  @Column()
  @IsDefined({ always: true })
  @IsString({ always: true })
  @MinLength(5, { always: true })
  password: string;

  @Column()
  @IsDefined({ always: true })
  @IsString({ always: true })
  @MinLength(1, { always: true })
  email: string;

  // @Column()
  // @IsDate({ always: true })
  // created_at: number;

  // @Column()
  // @IsDate({ always: true })
  // updated_at: number;
}
