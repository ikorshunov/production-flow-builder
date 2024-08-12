import { Node, BuiltInNode, HandleType } from '@xyflow/react';

export type ResourceType = 'coal' | 'power' | 'rubber' | 'paint' | 'rubberDuck';
export type HandleId = `${ResourceType}-${HandleType}`;

export type CoalPowerPlantNode = Node<{ power: number }, 'coalPowerPlant'>;
export type WindPowerPlantNode = Node<{ power: number }, 'windPowerPlant'>;
export type CoalSupplierNode = Node<{ supplyRate: number }, 'coalSupplier'>;
export type RubberSupplierNode = Node<{ supplyRate: number }, 'rubberSupplier'>;
export type PaintSupplierNode = Node<{ supplyRate: number }, 'paintSupplier'>;
export type DuckFactoryNode = Node<{ productionRate: number }, 'duckFactory'>;
export type StoreNode = Node<{ stock: Record<'rubberDuck', number> }, 'store'>;

export type NodeType =
    | BuiltInNode
    | CoalPowerPlantNode
    | WindPowerPlantNode
    | CoalSupplierNode
    | RubberSupplierNode
    | PaintSupplierNode
    | DuckFactoryNode
    | StoreNode;
