import { Node, Edge } from '@xyflow/react';
import { categoryNodeOptions } from './constants';

export type ResourceType =
    | 'coal'
    | 'wind'
    | 'power'
    | 'rubber'
    | 'paint'
    | 'rubberDuck'
    | 'any'
    | 'unknown';

export type NodeCategory = 'supplier' | 'power' | 'factory' | 'store';

export type SourceHandleId = `${ResourceType}-source`;
export type TargetHandleId = `${ResourceType}-target`;
export type HandleId = SourceHandleId | TargetHandleId;

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

export type SupplierNodeState = {
    resource: (typeof categoryNodeOptions.supplier)[number] | 'unknown';
};
export type PowerPlantNodeState = {
    resource: (typeof categoryNodeOptions.power)[number] | 'unknown';
};
export type FactoryNodeState = {
    resource: (typeof categoryNodeOptions.factory)[number] | 'unknown';
};
export type StoreNodeState = {
    resource: (typeof categoryNodeOptions.store)[number];
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

export type EditorState = {
    nodes: NodeType[];
    edges: Edge[];
};

export type NodeState<T extends NodeCategory = NodeCategory> = Record<
    string,
    {
        id: string;
        type: T;
        state: NodeStateMap[T];
    }
>;

export type ModelState = {
    id: string;
    editorState: EditorState;
    nodeState: NodeState;
};

export type EditorContextValue = {
    model: ModelState;
    api: {
        setNodeState: <T extends NodeCategory>(params: {
            id?: string;
            node: NodeType;
            nodeState: NodeStateMap[T];
        }) => void;
        setEditorState: (params: { state: EditorState }) => void;
    };
};
