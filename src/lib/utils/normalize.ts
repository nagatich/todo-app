import { Dimensions, PixelRatio } from 'react-native'

const rotate = Dimensions.get('window').width > Dimensions.get('window').height

export const WINDOW_WIDTH = !rotate
  ? Dimensions.get('window').width
  : Dimensions.get('window').height

export const WINDOW_HEIGHT = !rotate
  ? Dimensions.get('window').height
  : Dimensions.get('window').width

const scale = WINDOW_WIDTH / 360

export function normalize(size: number, px?: false): number
export function normalize(size: number, px?: true): string
export function normalize(size: number, px?: boolean) {
  const newSize = size * scale
  if (px) {
    return `${Math.round(PixelRatio.roundToNearestPixel(newSize))}${px === true ? 'px' : px}`
  }
  return Math.round(PixelRatio.roundToNearestPixel(newSize))
}

export function mp(top: number, right = top, bottom = top, left = right) {
  return `${normalize(top)}px ${normalize(right)}px ${normalize(bottom)}px ${normalize(left)}px`
}
