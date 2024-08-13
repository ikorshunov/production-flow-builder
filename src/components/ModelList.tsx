import { useMutation } from '@tanstack/react-query';
import { ImSpinner9 } from 'react-icons/im';

import { createModel } from '../api/createModel';

type ModelListProps = {
    items: string[];
    onSelect: (id: string) => void;
};

export const ModelList = (props: ModelListProps) => {
    const { items, onSelect } = props;
    const mutation = useMutation({
        mutationFn: () => createModel(),
        onSuccess: (model) => onSelect(model.id),
    });

    const buttonClassName = 'shadow-md rounded-md p-5 w-32 h-32 shrink-0';
    return (
        <div className="flex gap-3 flex-wrap">
            <button
                onClick={() => mutation.mutate()}
                className={`${buttonClassName} bg-lime-400 text-lime-800`}
                disabled={mutation.isPending}
            >
                {mutation.isPending ? (
                    <ImSpinner9
                        size="70"
                        color="#3f6212"
                        className="animate-spin m-auto"
                    />
                ) : (
                    'Create New Model'
                )}
            </button>
            {items.map((modelId) => {
                return (
                    <button
                        className={`${buttonClassName} bg-slate-200`}
                        key={modelId}
                        onClick={() => onSelect(modelId)}
                    >
                        {modelId.split('-')[0]}
                    </button>
                );
            })}
        </div>
    );
};
