import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('contactus')
export class Contactus {

    // 문의 아이디
    @PrimaryGeneratedColumn('increment')
    contactus_id: number;

    @Column({
        default: 0
    })
    contactus_type: number;

    // 문의 제목
    @Column({
        length: 50
    })
    contactus_title: string;

    // 문의 내용
    @Column()
    contactus_content: string;

    // 문의고객 이메일
    @Column()
    contactus_email: string;

    // 답변
    @Column()
    contactus_answer: string;

    // 처리여부
    @Column()
    contactus_status: number

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
