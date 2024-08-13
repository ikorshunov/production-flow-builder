import { Node } from '@xyflow/react';

import { ResourceType } from '../types';
import { categoryNodeOptions } from '../constants';

export type SupplierNode = Node<{ supplyRate: number }, 'supplier'>;
export type PowerPlantNode = Node<{ power: number }, 'power'>;
export type FactoryNode = Node<{ productionRate: number }, 'factory'>;
export type StoreNode = Node<
    {
        stock: Record<
            Exclude<ResourceType, 'wind' | 'unknown' | 'any'>,
            number
        >;
    },
    'store'
>;
export type NodeType = SupplierNode | PowerPlantNode | FactoryNode | StoreNode;

export type SupplierNodeState =
    | {
          resource: (typeof categoryNodeOptions.supplier)[number];
          price: number;
      }
    | {
          resource: 'unknown';
      };
export type PowerPlantNodeState = {
    source: (typeof categoryNodeOptions.power)[number] | 'unknown';
};
export type FactoryNodeState = {
    product: (typeof categoryNodeOptions.factory)[number] | 'unknown';
};
export type StoreNodeState = {
    prices: Record<Exclude<ResourceType, 'wind' | 'unknown' | 'any'>, number>;
};
export type NodeStateType =
    | SupplierNodeState
    | PowerPlantNodeState
    | FactoryNodeState
    | StoreNodeState;

export type NodeStateMap = {
    supplier: SupplierNodeState;
    power: PowerPlantNodeState;
    factory: FactoryNodeState;
    store: StoreNodeState;
};
