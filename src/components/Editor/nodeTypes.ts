import { NodeTypes } from '@xyflow/react';

import { CoalPowerPlant } from './nodes/CoalPowerPlant';
import { CoalSupplier } from './nodes/CoalSupplier';
import { DuckFactory } from './nodes/DuckFactory';
import { Store } from './nodes/Store';
import { WindPowerPlant } from './nodes/WindPowerPlant';
import { RubberSupplier } from './nodes/RubberSupplier';
import { PaintSupplier } from './nodes/PaintSupplier';

export const nodeTypes: NodeTypes = {
    coalPowerPlant: CoalPowerPlant,
    windPowerPlant: WindPowerPlant,
    coalSupplier: CoalSupplier,
    rubberSupplier: RubberSupplier,
    paintSupplier: PaintSupplier,
    duckFactory: DuckFactory,
    store: Store,
};
