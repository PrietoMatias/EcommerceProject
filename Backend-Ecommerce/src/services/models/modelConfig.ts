import mongoose, {Document, Model} from 'mongoose';
import schemaConfig from '../schemas/schemaConfig';

export interface IConfig extends Document{
    name:[string];
    currency: [string];
    language:[string];
    policies_and_privacy: string;
    terms_and_conditions: string;
}

export const Config: Model<IConfig> = mongoose.model<IConfig>('Config', schemaConfig)