import { useCallback, useState } from 'react';
import { ReactFlowProvider } from '@xyflow/react';
import { useQuery } from '@tanstack/react-query';
import { ImSpinner9 } from 'react-icons/im';

import { Editor } from './components/Editor/Editor';
import { EditorContext } from './components/Editor/state/EditorContext';
import { getModelList } from './api/getModelList';
import { PROJECT_NAME } from './components/Editor/constants';
import { ModelList } from './components/ModelList';

export const App = () => {
    const hash = location.hash;
    const modelId = hash ? hash.substring(1) : undefined;
    const [selectedModelId, setSelectedModelId] = useState<string | undefined>(
        modelId
    );
    const { data: modelList } = useQuery({
        queryKey: [PROJECT_NAME, 'modelList'],
        queryFn: () => getModelList(),
    });

    const handleModelSelect = useCallback((modelId: string) => {
        history.pushState(null, '', `#${modelId}`);
        setSelectedModelId(modelId);
    }, []);

    if (!selectedModelId) {
        if (!modelList) {
            return (
                <div className="w-screen h-screen flex items-center justify-center">
                    <ImSpinner9
                        size="100"
                        color="#c6ff00"
                        className="animate-spin"
                    />
                </div>
            );
        }

        return (
            <div className="p-8 flex flex-col gap-8">
                <h1 className="text-[2em]">
                    Welcome to Production Flow Builder
                </h1>
                <ModelList items={modelList} onSelect={handleModelSelect} />
            </div>
        );
    }

    return (
        <div className="w-screen h-screen">
            <ReactFlowProvider>
                <EditorContext modelId={selectedModelId}>
                    <Editor />
                </EditorContext>
            </ReactFlowProvider>
        </div>
    );
};
