import { EditorState } from 'src/components/Editor/state/types';
import { readFromLocalStorage, writeToLocalStorage } from './helpers';

export const updateEditorState = (params: {
    modelId: string;
    state: EditorState;
}) => {
    const { modelId, state } = params;
    const data = readFromLocalStorage();
    data[modelId].editorState = state;

    return writeToLocalStorage(data).then(() => undefined);
};
