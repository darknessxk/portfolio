import {IInfo} from "@interfaces/IInfo.interface";
import {IProject} from "@interfaces/IProject.interface";
import {IStack} from "@interfaces/IStack.interface";
import {ISocial} from "@interfaces/ISocial.interface";

export interface IAIOApiInterface {
    info: Array<IInfo>
    projects: Array<IProject>
    stack: Array<IStack>
    socials: Array<ISocial>
}