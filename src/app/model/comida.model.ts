import { Restaurante } from './restaurante.model';

export interface Comida{
    id:number;
    nombre:string;
    descripcion:string;
    precio:number;
    restaurante:Restaurante;
}