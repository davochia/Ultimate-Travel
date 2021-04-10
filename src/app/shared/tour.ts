import { Destination } from "./destination";

export class Tour{
    id: number;
    title: string;
    country: string;
    image: string;
    introduction: string;
    destinations: Destination[];
}