import { Regiao } from './regiao';
import { Model } from './model';

export interface Estado extends Model {
        sigla: string;
        regiao: Regiao;
}