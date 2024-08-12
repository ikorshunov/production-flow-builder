import { ReactFlowProvider } from '@xyflow/react';
import { Editor } from './components/Editor/Editor';

export const App = () => {
    return (
        <div className="w-screen h-screen">
            <ReactFlowProvider>
                <Editor />
            </ReactFlowProvider>
        </div>
    );
};
