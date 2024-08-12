import { Node } from '@xyflow/react';

import { ResourceType } from '../types';

export type SupplierNode<T extends string> = Node<{ supplyRate: number }, T>;
export type PowerPlantNode<T extends string> = Node<{ power: number }, T>;
export type FactoryNode<T extends string> = Node<{ productionRate: number }, T>;
export type StoreNode<T extends string, S extends string> = Node<
    { stock: Record<S, number> },
    T
>;

export type SupplierNodeType = SupplierNode<
    'coalSupplier' | 'rubberSupplier' | 'paintSupplier'
>;
export type PowerPlantNodeType = PowerPlantNode<
    'coalPowerPlant' | 'windPowerPlant'
>;
export type FactoryNodeType = FactoryNode<'duckFactory'>;
export type StoreNodeType = StoreNode<'defaultStore', ResourceType>;
export type NodeType =
    | SupplierNodeType
    | PowerPlantNodeType
    | FactoryNodeType
    | StoreNodeType;
