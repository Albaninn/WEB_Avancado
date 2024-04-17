import {create} from 'zustand'

interface CountState {
    count: number,
    increase: (by: number) => void
}

const useCountStore = create<CountState>()(
    (set) => ({
        count: 0,
        increase: (by) => set(
            (state) => ({count: state.count + by})
        ),
    })
)

export default useCountStore