import {
  TextStripEffect,
  VideoStripEffect,
  AudioStripEffect,
  StripEffect
} from './stripEffect'
import { PluginStripEffect } from './stripEffect/PlulginStripEffect'

export interface Strip {
  id: string;
  start: number;
  length: number;
  layer: number;
  effects: (
    | StripEffect
    | TextStripEffect
    | VideoStripEffect
    | AudioStripEffect
    | PluginStripEffect
  )[];
}
