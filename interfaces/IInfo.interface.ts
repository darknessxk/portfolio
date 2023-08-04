import {IMongoDocument} from "@/interfaces/IMongoDocument.interface";

export interface IInfo extends IMongoDocument {
    source: string;
    version: string;
}