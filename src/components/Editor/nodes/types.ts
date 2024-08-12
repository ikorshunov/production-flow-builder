import { Node, BuiltInNode, Connection, Edge } from '@xyflow/react';

export type ResourceType =
    | 'coal'
    | 'power'
    | 'rubber'
    | 'paint'
    | 'rubberDuck'
    | 'any';
export type SourceHandleId = `${ResourceType}-source`;
export type TargetHandleId = `${ResourceType}-target`;
export type HandleId = SourceHandleId | TargetHandleId;

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

export function isSourceHandle(
    sourceHandle: Connection['sourceHandle'] | Edge['sourceHandle']
): sourceHandle is SourceHandleId {
    if (!sourceHandle) {
        return false;
    }
    const sourceHandleParts = sourceHandle.split('-');
    // Don't check resource name (sourceHandleParts[0]) to avoid iterating
    // over potentially big array of resources.
    return sourceHandleParts[1] === 'source';
}

export function isTargetHandle(
    targetHandle: Connection['targetHandle'] | Edge['targetHandle']
): targetHandle is TargetHandleId {
    if (!targetHandle) {
        return false;
    }
    const targetHandleParts = targetHandle.split('-');
    // Don't check resource name (targetHandleParts[0]) to avoid iterating
    // over potentially big array of resources.
    return targetHandleParts[1] === 'target';
}
