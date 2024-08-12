import { PropsWithChildren } from 'react';

import { categoryLayoutConfigMap } from '../constants';
import { NodeCategory } from '../types';

type ToolbarLayoutProps = PropsWithChildren<{
    category: NodeCategory;
}>;

export const ToolbarLayout = (props: ToolbarLayoutProps) => {
    const { children, category } = props;
    const { name, nodeColor } = categoryLayoutConfigMap[category];

    return (
        <section>
            <h1 className="select-none">{name}</h1>
            <div
                style={{
                    backgroundColor: nodeColor,
                }}
                className="shadow-md px-3 py-2 rounded-md flex gap-4"
            >
                {children}
            </div>
        </section>
    );
};
