import { Edge } from '@xyflow/react';

import { StatefulNodeType } from '../nodes/types';

export type ModelState = {
    id: string;
    nodes: StatefulNodeType[];
    edges: Edge[];
};
export type State = Record<string, ModelState>;
