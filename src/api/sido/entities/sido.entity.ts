import { Gungu } from "src/api/gungu/entities/gungu.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('sido')
export class Sido {
    // 시도 아이디
    @PrimaryGeneratedColumn('increment')
    sido_id: number;

    // 시도명
    @Column({
        length: 15
    })
    sido_name: string;

    // 시도 사용여부(통폐합 등)
    @Column({
        default: true
    })
    sido_use: boolean;

    @CreateDateColumn({
        type: "datetime",
        default: () => "CURRENT_TIMESTAMP"
    })
    sido_created_at: number;

    @UpdateDateColumn({
        type: "datetime",
        default: () => "CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP"
    })
    sido_updated_at: number;

    @OneToMany(type => Gungu, gungu => gungu.gungu_id)
    gungus: Gungu[]
}
