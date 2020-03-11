import { BaseModel } from './base-model';

export class Doctor extends BaseModel {
    nome: string;
    especialidade: string;
    cfm: number;
}
