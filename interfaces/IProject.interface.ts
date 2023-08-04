import {IMongoDocument} from "@/interfaces/IMongoDocument.interface";
import {StaticImageData} from "next/image";

export interface IProject extends IMongoDocument {
    title: string;
    description: string;
    preview: string;
    source: string;
    imageSrc: string | StaticImageData;
    stack: string[];
}