import { Node } from '@xyflow/react';

export type NodeCategory = 'supplier' | 'power' | 'factory' | 'store';

export type CoalPowerPlantNode = Node<{ power: number }, 'coalPowerPlant'>;
export type WindPowerPlantNode = Node<{ power: number }, 'windPowerPlant'>;
export type CoalSupplierNode = Node<{ supplyRate: number }, 'coalSupplier'>;
export type RubberSupplierNode = Node<{ supplyRate: number }, 'rubberSupplier'>;
export type PaintSupplierNode = Node<{ supplyRate: number }, 'paintSupplier'>;
export type DuckFactoryNode = Node<{ productionRate: number }, 'duckFactory'>;
export type StoreNode = Node<{ stock: Record<'rubberDuck', number> }, 'store'>;

export type NodeType =
    | CoalPowerPlantNode
    | WindPowerPlantNode
    | CoalSupplierNode
    | RubberSupplierNode
    | PaintSupplierNode
    | DuckFactoryNode
    | StoreNode;
