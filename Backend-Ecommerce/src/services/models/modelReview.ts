import mongoose, {Model, Document, ObjectId} from 'mongoose';
import schemaReview from '../schemas/schemaReview';

export interface IReview extends Document{
    product_id: ObjectId;
    user_id: ObjectId;
    calification: number;
    comment: string;
    datereview: Date;
}

export const Review: Model<IReview> = mongoose.model<IReview>('Review', schemaReview)