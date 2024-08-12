import { ResourceType } from '../types';

export type SourceHandleId = `${ResourceType}-source`;
export type TargetHandleId = `${ResourceType}-target`;
export type HandleId = SourceHandleId | TargetHandleId;
