import {IMongoDocument} from "@/interfaces/IMongoDocument.interface";

export interface IProject extends IMongoDocument {
    title: string;
    description: string;
    preview: string;
    source: string;
    imageSrc: string;
    stack: string[];
}