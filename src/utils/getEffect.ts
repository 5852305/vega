import { Strip } from '@/core/Strip'
import { StripEffect } from '@/core/stripEffect'

export function getEffect<T = StripEffect> (strip: Strip, type: string) {
  return strip.effects.find(e => e.type === type) as T | undefined
}
