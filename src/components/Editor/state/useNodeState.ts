import { NodeStateMap } from '../nodes/types';
import { NodeCategory } from '../types';
import { useEditorContext } from './useEditorContext';

export const useNodeState = <T extends NodeCategory>(nodeId: string) => {
    const context = useEditorContext();
    const nodeStateEntry = context.model.nodeState[nodeId];
    return nodeStateEntry
        ? (nodeStateEntry.state as NodeStateMap[T])
        : undefined;
};
