import { Connection, Edge } from '@xyflow/react';

import { SourceHandleId, TargetHandleId } from './types';

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
