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

export type StatefulNode<
    BaseNode extends Node,
    State extends Record<string, unknown>,
> = BaseNode & {
    state: State;
};
export type SupplierNodeState =
    | {
          resource: (typeof categoryNodeOptions.supplier)[number];
          price: number;
      }
    | {
          resource: 'unknown';
      };
export type StatefulSupplierNode = StatefulNode<
    SupplierNode,
    SupplierNodeState
>;
export type PowerPlantNodeState = {
    source: (typeof categoryNodeOptions.power)[number] | 'unknown';
};
export type StatefulPowerPlantNode = StatefulNode<
    PowerPlantNode,
    PowerPlantNodeState
>;
export type FactoryNodeState = {
    product: (typeof categoryNodeOptions.factory)[number] | 'unknown';
};
export type StatefulFactoryNode = StatefulNode<FactoryNode, FactoryNodeState>;
export type StoreNodeState = {
    prices: Record<Exclude<ResourceType, 'wind' | 'unknown' | 'any'>, number>;
};
export type StatefulStoreNode = StatefulNode<StoreNode, FactoryNodeState>;
export type StatefulNodeType =
    | StatefulSupplierNode
    | StatefulPowerPlantNode
    | StatefulFactoryNode
    | StatefulStoreNode;
