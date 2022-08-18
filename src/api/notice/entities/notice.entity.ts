import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('notice')
export class Notice {

    // 공지 아이디
    @PrimaryGeneratedColumn('increment')
    notice_id: number;

    // 0: 최상단, 1: 공지, 2: 이벤트
    @Column({
        default: 0
    })
    notice_type: number;

    // 공지 제목
    @Column({
        length: 50
    })
    notice_title: string;

    // 공지 내용
    @Column()
    notice_content: string;

    @Column({
        default: true
    })
    notice_use: boolean;

    @CreateDateColumn({
        type: "datetime",
        default: () => "CURRENT_TIMESTAMP"
    })
    branch_created_at: number;

    @UpdateDateColumn({
        type: "datetime",
        default: () => "CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP"
    })
    branch_updated_at: number;
}
