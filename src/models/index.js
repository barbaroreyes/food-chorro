// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Especiales, Order, OfertaOrder, Oferta } = initSchema(schema);

export {
  Especiales,
  Order,
  OfertaOrder,
  Oferta
};