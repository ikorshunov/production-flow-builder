import { DragEvent, useCallback } from 'react';
import { Panel } from '@xyflow/react';

import { ToolbarNode } from './nodes/ToolbarNode';
import { NodeType } from './types';
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
        <Panel
            position="top-right"
            className="flex flex-col justify-end gap-2 select-none"
        >
            <h1>Pick nodes and try to connect them to each other:</h1>
            <div className="flex gap-4 justify-end">
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
