import {IMongoDocument} from "@/interfaces/IMongoDocument.interface";
import {StackTagType} from "@/types/StackTag.type";

export interface IStack extends IMongoDocument {
    Name: string
    Tags: Array<StackTagType>
    Item: string
    Class: string
}