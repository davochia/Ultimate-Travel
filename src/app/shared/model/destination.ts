import { Comment } from './comment';
import { Service } from './service';

export class Destination{
    places: string;
    rating: number;
    image: string;
    price: number;
    description: string;
    hot_tour: boolean;
    comments: Comment[];
    services: Service[];
    
}