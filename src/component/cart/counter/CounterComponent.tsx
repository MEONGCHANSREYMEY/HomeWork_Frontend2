'use client'

import { decrement, increment } from '@/src/redux/features/counter/counterSlice'
import { useAppDispatch, useAppSelector } from '@/src/redux/hooks'

export function Counter() {
  const count = useAppSelector((state) => state.counter.value)
  const dispatch = useAppDispatch()

  return (
    <div className="flex items-center gap-4 p-6">
      <button
        className="px-4 py-2 rounded bg-gray-300 cursor-pointer"
        onClick={() => dispatch(decrement())}
      >
        −
      </button>
      <span className="text-2xl font-bold">{count}</span>
      <button
        className="px-4 py-2 rounded bg-gray-300 cursor-pointer"
        onClick={() => dispatch(increment())}
      >
        +
      </button>
    </div>
  )
}