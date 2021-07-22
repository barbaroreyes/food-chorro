import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type EspecialesMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type OrderMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type OfertaOrderMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type OfertaMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Especiales {
  readonly id: string;
  readonly Dia?: string;
  readonly name?: string;
  readonly Description?: string;
  readonly price?: number;
  readonly image?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Especiales, EspecialesMetaData>);
  static copyOf(source: Especiales, mutator: (draft: MutableModel<Especiales, EspecialesMetaData>) => MutableModel<Especiales, EspecialesMetaData> | void): Especiales;
}

export declare class Order {
  readonly id: string;
  readonly date?: string;
  readonly total?: number;
  readonly username?: string;
  readonly ofertas?: (OfertaOrder | null)[];
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Order, OrderMetaData>);
  static copyOf(source: Order, mutator: (draft: MutableModel<Order, OrderMetaData>) => MutableModel<Order, OrderMetaData> | void): Order;
}

export declare class OfertaOrder {
  readonly id: string;
  readonly oferta: Oferta;
  readonly order: Order;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<OfertaOrder, OfertaOrderMetaData>);
  static copyOf(source: OfertaOrder, mutator: (draft: MutableModel<OfertaOrder, OfertaOrderMetaData>) => MutableModel<OfertaOrder, OfertaOrderMetaData> | void): OfertaOrder;
}

export declare class Oferta {
  readonly id: string;
  readonly name?: string;
  readonly description?: string;
  readonly image?: string;
  readonly price?: number;
  readonly Orders?: (OfertaOrder | null)[];
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Oferta, OfertaMetaData>);
  static copyOf(source: Oferta, mutator: (draft: MutableModel<Oferta, OfertaMetaData>) => MutableModel<Oferta, OfertaMetaData> | void): Oferta;
}