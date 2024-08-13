import { DragEvent, useCallback } from 'react';
import { Panel } from '@xyflow/react';

import { ToolbarNode } from './nodes/ToolbarNode';
import { NodeType } from './nodes/types';
import { categories } from './constants';

type NodeSelectorPanelProps = {
    onDragStart: (
        event: DragEvent,
        nodeType: Exclude<NodeType['type'], undefined>
    ) => void;
};

export const NodeSelectorPanel = (props: NodeSelectorPanelProps) => {
    const { onDragStart } = props;
    const getOnDragStart = useCallback(
        (nodeType: Exclude<NodeType['type'], undefined>) => {
            return (event: DragEvent) => {
                onDragStart(event, nodeType);
            };
        },
        [onDragStart]
    );
    return (
        <Panel position="top-right" className="flex flex-col gap-2 select-none">
            <h1>Pick a node:</h1>
            <div className="flex gap-4">
                {categories.map((categoryName) => {
                    return (
                        <ToolbarNode
                            key={categoryName}
                            categoryName={categoryName}
                            onDragStart={getOnDragStart(categoryName)}
                            draggable
                        />
                    );
                })}
            </div>
        </Panel>
    );
};
