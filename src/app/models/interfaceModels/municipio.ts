import { Model } from './model';
import { Microregiao } from './microregiao';

export interface Municipio extends Model {
    microregiao: Microregiao;
}