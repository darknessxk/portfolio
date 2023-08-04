import {IMongoDocument} from "@/interfaces/IMongoDocument.interface";

export interface ISocial extends IMongoDocument {
    href: string;
    icon: string;
}