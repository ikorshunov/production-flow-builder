import { Position } from '@xyflow/react';
import { MdFactory } from 'react-icons/md';
import { ImPower } from 'react-icons/im';
import { GiPlasticDuck, GiPaintBucket } from 'react-icons/gi';
import { SiGumtree } from 'react-icons/si';

import { NodeLayout } from './NodeLayout';
import { Handle } from './Handle';

export const DuckFactory = () => {
    return (
        <NodeLayout
            name="Duck factory"
            mainIcon={MdFactory}
            mainIconColor="#9b5151"
            auxIcon={GiPlasticDuck}
            auxIconColor="#ffeb00"
        >
            <Handle
                id="duckOutput"
                icon={<GiPlasticDuck color="#ffeb00" />}
                type="source"
                position={Position.Right}
            />
            <Handle
                className="top-3 -translate-x-1/2"
                icon={<ImPower color="#ffda00" />}
                size="sm"
                id="powerInput"
                type="target"
                position={Position.Left}
            />
            <Handle
                icon={<SiGumtree color="white" />}
                size="sm"
                id="rubberInput"
                type="target"
                position={Position.Left}
            />
            <Handle
                className="bottom-3 top-auto -translate-x-1/2"
                icon={<GiPaintBucket color="#8200ff" />}
                size="sm"
                id="paintInput"
                type="target"
                position={Position.Left}
            />
        </NodeLayout>
    );
};
