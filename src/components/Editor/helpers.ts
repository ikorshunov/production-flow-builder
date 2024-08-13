import { Connection, Edge } from '@xyflow/react';

import {
    SourceHandleId,
    TargetHandleId,
    NodeStateType,
    NodeType,
} from './types';

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

export const createNewNode = (
    type: Exclude<NodeType['type'], undefined>,
    position: { x: number; y: number }
): NodeType => {
    const nodeTemplate = {
        id: crypto.randomUUID(),
        position,
    };

    switch (type) {
        case 'supplier': {
            return {
                ...nodeTemplate,
                type,
                data: { supplyRate: 0 },
            };
        }
        case 'power':
            return {
                ...nodeTemplate,
                type,
                data: { power: 0 },
            };
        case 'factory':
            return {
                ...nodeTemplate,
                type,
                data: { productionRate: 0 },
            };
        case 'store':
            return {
                ...nodeTemplate,
                type,
                data: {
                    stock: {
                        rubberDuck: 0,
                        power: 0,
                        coal: 0,
                        rubber: 0,
                        paint: 0,
                    },
                },
            };
    }
};

export const createNewNodeState = (
    type: Exclude<NodeType['type'], undefined>
): NodeStateType => {
    switch (type) {
        case 'supplier':
        case 'power':
        case 'factory':
            return {
                resource: 'unknown',
            };
        case 'store':
            return {
                resource: 'any',
            };
    }
};
