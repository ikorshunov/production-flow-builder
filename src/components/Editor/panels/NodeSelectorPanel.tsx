import { DragEvent, useCallback } from 'react';
import { Panel } from '@xyflow/react';

import { ToolbarNode } from '../nodes/ToolbarNode';
import { NodeType } from '../nodes/types';
import { categories } from '../constants';

export const NodeSelectorPanel = () => {
    const getOnDragStart = useCallback(
        (nodeType: Exclude<NodeType['type'], undefined>) => {
            return (event: DragEvent) => {
                event.dataTransfer.setData('application/reactflow', nodeType);
                event.dataTransfer.effectAllowed = 'move';
            };
        },
        []
    );
    return (
        <Panel position="top-left" className="flex flex-col gap-2 select-none">
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
