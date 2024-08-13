import * as Dialog from '@radix-ui/react-dialog';
import { IoIosCloseCircleOutline } from 'react-icons/io';

import { NodeCategory } from './types';
import { categoryLayoutConfigMap, categoryNodeOptions } from './constants';
import { ResourceIcon } from './ResourceIcon';
import { useEffect, useState } from 'react';
import { NodeStateType } from './nodes/types';
import { useNodeState } from './state/useNodeState';
import { useEditorContext } from './state/useEditorContext';

type NodeStateModalProps = Pick<Dialog.DialogProps, 'open' | 'onOpenChange'> & {
    nodeId: string;
    nodeCategory: NodeCategory;
};

// Tailwind classes were taken from example here: https://www.radix-ui.com/primitives/docs/components/dialog
export const NodeStateModal = (props: NodeStateModalProps) => {
    const { open, onOpenChange, nodeId, nodeCategory } = props;
    const categoryLayoutConfig = categoryLayoutConfigMap[nodeCategory];
    const options = categoryNodeOptions[nodeCategory];
    const nodeState = useNodeState(nodeId);
    const {
        model: { editorState },
        api: { setNodeState },
    } = useEditorContext();
    const [state, setState] = useState(nodeState);

    useEffect(() => {
        setState(nodeState);
    }, [nodeState]);

    return (
        <Dialog.Root open={open} onOpenChange={onOpenChange}>
            <Dialog.Portal>
                <Dialog.Overlay className="bg-slate-800 opacity-30 fixed inset-0" />
                <Dialog.Content className="fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none">
                    <Dialog.Title className="m-0 text-[17px] font-medium">
                        Configure {nodeCategory} node
                    </Dialog.Title>
                    <Dialog.Description className="mt-[10px] mb-5 text-[15px] leading-normal">
                        {categoryLayoutConfig.editText}:
                    </Dialog.Description>
                    <div
                        style={{
                            backgroundColor: categoryLayoutConfig.nodeColor,
                        }}
                        className="w-full p-4 rounded-md flex gap-8 items-center justify-center"
                    >
                        {options.map((resource) => {
                            const isSelected = resource === state?.resource;

                            return (
                                <button
                                    key={resource}
                                    className={`p-3 rounded-md cursor-pointer border-2 hover:shadow-lg hover:border-black ${isSelected ? 'border-black' : 'border-transparent'}`}
                                    onClick={() => {
                                        setState((prevState) => {
                                            if (!prevState) {
                                                return;
                                            }

                                            return {
                                                ...prevState,
                                                resource,
                                            } as NodeStateType;
                                        });
                                    }}
                                >
                                    <ResourceIcon
                                        className="drop-shadow-md"
                                        name={resource}
                                        size="50"
                                    />
                                </button>
                            );
                        })}
                    </div>
                    <div className="mt-[25px] flex justify-end gap-4">
                        <Dialog.Close asChild>
                            <button className="inline-flex h-[35px] items-center justify-center rounded-[4px] px-[15px] font-medium leading-none focus:shadow-[0_0_0_2px] focus:outline-none">
                                Cancel
                            </button>
                        </Dialog.Close>
                        <Dialog.Close asChild>
                            <button
                                onClick={() => {
                                    setNodeState({
                                        id: nodeId,
                                        node: editorState.nodes.find(
                                            (node) => node.id === nodeId
                                        )!,
                                        nodeState: state as NodeStateType,
                                    });
                                    onOpenChange?.(false);
                                }}
                                className="bg-lime-300 hover:bg-lime-400 focus:shadow-lime-800 inline-flex h-[35px] items-center justify-center rounded-[4px] px-[15px] font-medium leading-none focus:shadow-[0_0_0_2px] focus:outline-none"
                            >
                                Save changes
                            </button>
                        </Dialog.Close>
                    </div>
                    <Dialog.Close asChild>
                        <button
                            className="absolute top-[10px] right-[10px] inline-flex h-[25px] w-[25px] appearance-none items-center justify-center rounded-full focus:shadow-[0_0_0_2px] focus:outline-none"
                            aria-label="Close"
                        >
                            <IoIosCloseCircleOutline size="40" />
                        </button>
                    </Dialog.Close>
                </Dialog.Content>
            </Dialog.Portal>
        </Dialog.Root>
    );
};
