import { Event } from "./event";

export interface EventRepository{
    addEvent(name: string, description: string, date: Date, hour: string, location: string, userId: number): Promise<Event | null>;
}

// mostrar eventos en general
// mostrat eventos por categoria
// mostrar eventos por fecha
// mostrar eventos por ubicacion