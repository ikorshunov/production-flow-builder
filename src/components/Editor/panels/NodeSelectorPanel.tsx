import { Panel } from '@xyflow/react';
import {
    GiCoalWagon,
    GiPaintBucket,
    GiPlasticDuck,
    GiWindTurbine,
} from 'react-icons/gi';
import { HiMiniInboxArrowDown } from 'react-icons/hi2';
import { SiGumtree } from 'react-icons/si';

import { ToolbarNode } from '../nodes/ToolbarNode';
import { ToolbarLayout } from './ToolbarLayout';
import { DragEvent, useCallback } from 'react';
import { NodeType } from '../nodes/types';

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
        <Panel className="flex gap-5">
            <ToolbarLayout category="supplier">
                <ToolbarNode
                    draggable
                    onDragStart={getOnDragStart('coalSupplier')}
                    icon={GiCoalWagon}
                />
                <ToolbarNode
                    draggable
                    onDragStart={getOnDragStart('rubberSupplier')}
                    icon={SiGumtree}
                    iconColor="#fff"
                />
                <ToolbarNode
                    draggable
                    onDragStart={getOnDragStart('paintSupplier')}
                    icon={GiPaintBucket}
                    iconColor="#8200ff"
                />
            </ToolbarLayout>
            <ToolbarLayout category="power">
                <ToolbarNode
                    draggable
                    onDragStart={getOnDragStart('coalPowerPlant')}
                    icon={GiCoalWagon}
                />
                <ToolbarNode
                    draggable
                    onDragStart={getOnDragStart('windPowerPlant')}
                    icon={GiWindTurbine}
                    iconColor="#0078ff"
                />
            </ToolbarLayout>
            <ToolbarLayout category="factory">
                <ToolbarNode
                    draggable
                    onDragStart={getOnDragStart('duckFactory')}
                    icon={GiPlasticDuck}
                    iconColor="#ffeb00"
                />
            </ToolbarLayout>
            <ToolbarLayout category="store">
                <ToolbarNode
                    draggable
                    onDragStart={getOnDragStart('defaultStore')}
                    icon={HiMiniInboxArrowDown}
                    iconColor="#fff"
                />
            </ToolbarLayout>
        </Panel>
    );
};
