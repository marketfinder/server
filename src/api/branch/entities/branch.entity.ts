import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('mart_branch')
export class Branch {
    @PrimaryGeneratedColumn('increment')
    mart_branch_id: number;

    @Column({
        length: 45
    })
    branch_name: string;

    // 영업시작시간
    @Column({
        default: 0
    })
    branch_open_time: number;

    // 영업종료시간
    @Column({
        default: 24
    })
    branch_close_time: number;

    // 지점 전화번호
    @Column({
        length: 15
    })
    branch_number: string;

    // 지점 지번주소
    @Column({
        length: 200
    })
    branch_jibun_address: string;

    // 지점 도로명주소
    @Column({
        length: 200
    })
    branch_road_address: string;

    // 지점 영문주소
    @Column({
        length: 200
    })
    branch_english_address: string;

    // 신 우편번호
    @Column({
        length: 5
    })
    branch_postcode: string;

    // 위도
    @Column()
    branch_latitude: number;

    // 경도
    @Column()
    branch_longitude: number;

    // 마트 1번째 휴무일
    @Column({
        default: 15
    })
    branch_holiday_one: number;

    // 마트 2번째 휴무일
    @Column({
        default: 29
    })
    branch_holiday_two: number;

    // 마트 휴무일을 매월 계산 후 안내
    @Column()
    branch_holiday: string;

    // 지점별 공지
    @Column()
    branch_notice: string;

    // 사용여부
    @Column({
        default: true
    })
    branch_use: boolean;

    // 대형마트 여부
    @Column({
        default: true
    })
    is_branch_large_scale_store: boolean;

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

    @Column()
    mart_id: number;

    @Column()
    gungu_id: number;

    // @ManyToOne(() => Mart)
    // @JoinColumn({ name: 'mart_id' })
    // mart: Mart
}
