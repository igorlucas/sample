import { Mesorregiao } from './mesorregiao';
import { Model } from './model';

export interface Microregiao extends Model {
    mesorregiao: Mesorregiao;
}