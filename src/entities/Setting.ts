import {Column, CreateDateColumn, Entity, PrimaryColumn, UpdateDateColumn} from "typeorm";
import {v4 as generateUuid} from "uuid";

@Entity("settings")
class Setting {

    @PrimaryColumn()
    id: string = generateUuid();

    @Column()
    username: string;

    @Column()
    chat: boolean;

    @CreateDateColumn({name: "created_at"})
    createdAt: Date;

    @UpdateDateColumn({name: "updated_at"})
    updatedAt: Date;
}

export {Setting};
