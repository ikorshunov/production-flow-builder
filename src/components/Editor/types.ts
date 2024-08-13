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
