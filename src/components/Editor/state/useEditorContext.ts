import { useContext } from 'react';

import { Context } from './EditorContext';

export const useEditorContext = () => {
    return useContext(Context);
};
