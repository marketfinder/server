import { Sido } from "src/api/sido/entities/sido.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('gungu')
export class Gungu {
    // 시군구 아이디
    @PrimaryGeneratedColumn('increment')
    gungu_id: number;

    // 시군구명
    @Column({
        length: 15
    })
    gungu_name: string;

    // 시군구 사용여부(통폐합 등)
    @Column({
        default: true
    })
    gungu_use: boolean;

    @Column({
        default: 15
    })
    gungu_holiday_1: number;

    @Column({
        default: 29
    })
    gungu_holiday_2: number;

    @CreateDateColumn({
        type: "datetime",
        default: () => "CURRENT_TIMESTAMP"
    })
    gungu_created_at: number;

    @UpdateDateColumn({
        type: "datetime",
        default: () => "CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP"
    })
    gungu_updated_at: number;

    @ManyToOne(type => Sido, sido => sido.gungus)
    @JoinColumn({ name: 'sido_id' })
    sido: Sido
}
