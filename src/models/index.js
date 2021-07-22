// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Order, OfertaOrder, Oferta } = initSchema(schema);

export {
  Order,
  OfertaOrder,
  Oferta
};