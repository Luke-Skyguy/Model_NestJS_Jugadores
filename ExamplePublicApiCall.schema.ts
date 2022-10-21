/* eslint-disable prettier/prettier */
import { Prop, raw, Schema, SchemaFactory } from '@nestjs/mongoose';

export type PublicApiCallDocument = PublicApiCall & Document;

@Schema({ collection: 'public_api_call' })
export class PublicApiCall {
  _id?: string;

  @Prop(String)
  clientUID?: string;

  @Prop(String)
  url?: string;

  @Prop(String)
  method?: string;

  @Prop(String)
  creationTimestamp?: string;

  @Prop(String)
  code?: number;

  @Prop(String)
  requestId?: string;

  @Prop(raw(Object))
  response?: any;

  @Prop(raw(Object))
  body?: any;
}

export const PublicApiCallSchema = SchemaFactory.createForClass(PublicApiCall);
