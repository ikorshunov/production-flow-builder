import { Node, BuiltInNode } from '@xyflow/react';

export type CoalPowerPlantNode = Node<{ power: number }, 'coalPowerPlant'>;
export type CoalSupplierNode = Node<{ supplyRate: number }, 'coalSupplier'>;
export type DuckFactoryNode = Node<{ productionRate: number }, 'duckFactory'>;
export type StoreNode = Node<{ stock: Record<'rubberDuck', number> }, 'store'>;

export type NodeType =
    | BuiltInNode
    | CoalPowerPlantNode
    | CoalSupplierNode
    | DuckFactoryNode
    | StoreNode;
