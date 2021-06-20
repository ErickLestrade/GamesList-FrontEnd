export interface Game{
    id?: number; //el '?' es para especificar que el atributo id no es Requerido a la hora de definir un objeto Game
    title?: string;
    description?: string;
    image?: string;
    created_at?: Date;
}