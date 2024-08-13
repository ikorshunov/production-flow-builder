import { useCallback, useContext } from 'react';

import { Context } from './EditorContext';

export const useEditorState = () => {
    const {
        model: { editorState },
        api: { setEditorState },
    } = useContext(Context);

    const updateEditorState = useCallback<typeof setEditorState>(
        setEditorState,
        [setEditorState]
    );

    return [editorState, updateEditorState];
};
