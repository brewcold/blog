import { vars } from '@/_lib/styles/themes.css'
import { getRandomBackground } from '@/utils/get-random-background'
import { RefObject } from 'react'
import { StateCreator } from 'zustand'

type CSSVarFunc = typeof vars.notion.default
const { backgroundColor } = getRandomBackground

//색상 배경
export interface RandomBackgroundSliceType {
  backgroundColor: CSSVarFunc
  setBackgroundColor: (c: CSSVarFunc) => void
}
export const randomBackgroundSlice: StateCreator<
  RandomBackgroundSliceType,
  [['zustand/devtools', never]],
  [],
  RandomBackgroundSliceType
> = set => ({
  backgroundColor: backgroundColor,
  setBackgroundColor: (backgroundColor: CSSVarFunc) =>
    set(_ => ({ backgroundColor })),
})

//이미지 배경
export interface BackgroundImageSliceType {
  src: string
  setImageSrc: (src: string) => void
}
export const backgroundImageSlice: StateCreator<
  BackgroundImageSliceType,
  [['zustand/devtools', never]],
  [],
  BackgroundImageSliceType
> = set => ({
  src: '',
  setImageSrc: (src: string) => set(_ => ({ src })),
})

//명도, 픽셀 평균값 등 배경을 통한 계산식
export interface BackgroundMetaSliceType {
  brightness: Map<string, number>
  setBrightness: (brightness: Map<string, number>) => void
  PREFERS_BLACK_TEXT: () => boolean
}
export const backgroundMetaSlice: StateCreator<
  BackgroundMetaSliceType,
  [['zustand/devtools', never]],
  [],
  BackgroundMetaSliceType
> = (set, get) => ({
  brightness: new Map(),
  setBrightness: brightness => set(_ => ({ brightness })),
  PREFERS_BLACK_TEXT: () => {
    const entries = get().brightness.entries()
    return entries.reduce((prev, [_, curr]) => prev + curr, 0) > 186
  },
})

//배경의 영향을 받는 RefObject들
export interface TargetElementSliceType {
  //Map+WeakSet으로 중복 체크 최적화
  refs: Map<string, RefObject<HTMLElement>>
  hasRef: (ref: RefObject<HTMLElement>, k?: string) => boolean
  addRef: (k: string, ref: RefObject<HTMLElement>) => void
  resetRef: () => void
  //ref.current 확인용 Weakset, 일반적인 방법으로 복사할 수 없어 상태 추적이 불가능함
  //중복 확인용으로만 사용하며 참조되지 않으면 GC가 바로 내부 원소의 참조를 해제함
  DON_T_USE_THIS__THIS_IS_UNTRACKABLE: WeakSet<HTMLElement>
}
export const targetElementSlice: StateCreator<
  TargetElementSliceType,
  [['zustand/devtools', never]],
  [],
  TargetElementSliceType
> = (set, get) => ({
  refs: new Map<string, RefObject<HTMLElement>>(),
  DON_T_USE_THIS__THIS_IS_UNTRACKABLE: new WeakSet<HTMLElement>(),
  //ref로 weakset 먼저 탐색, 없을 경우 key로 map 탐색
  hasRef: (ref: RefObject<HTMLElement>, k?: string) => {
    if (ref.current)
      return get().DON_T_USE_THIS__THIS_IS_UNTRACKABLE.has(ref.current)
    if (k) return get().refs.has(k)
    return false
  },
  //ref로 weakset 먼저 탐색
  addRef: (k: string, ref: RefObject<HTMLElement>) =>
    set(state => {
      const updatedRefs = new Map(state.refs)
      if (ref.current !== null)
        if (!state.DON_T_USE_THIS__THIS_IS_UNTRACKABLE.has(ref.current)) {
          state.DON_T_USE_THIS__THIS_IS_UNTRACKABLE.add(ref.current)
          updatedRefs.set(k, ref)
        }
      //만약 추가되지 않았을 때에도 상태 자체는 변화된 것으로 간주하고 업데이트
      return { refs: updatedRefs }
      // return state // 상태가 변화되지 않은 것으로 간주하려면 이 라인 이용
    }),
  resetRef: () =>
    set(_ => ({
      DON_T_USE_THIS__THIS_IS_UNTRACKABLE: new WeakSet(),
      refs: new Map(),
    })),
})
