import { NodeTypes } from '@xyflow/react';

import { CoalPowerPlant } from './CoalPowerPlant';
import { CoalSupplier } from './CoalSupplier';
import { DuckFactory } from './DuckFactory';
import { Store } from './Store';
import { WindPowerPlant } from './WindPowerPlant';
import { RubberSupplier } from './RubberSupplier';
import { PaintSupplier } from './PaintSupplier';

export const nodeTypes: NodeTypes = {
    coalPowerPlant: CoalPowerPlant,
    windPowerPlant: WindPowerPlant,
    coalSupplier: CoalSupplier,
    rubberSupplier: RubberSupplier,
    paintSupplier: PaintSupplier,
    duckFactory: DuckFactory,
    store: Store,
};
