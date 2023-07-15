import { useEffect, useRef } from 'react'

/**
 * A custom useEffect hook that only triggers on updates, not on initial mount
 * @param {eact.EffectCallback} effect
 * @param {React.DependencyList | undefined} deps
 */
const useUpdateEffect = (effect: React.EffectCallback, deps?: React.DependencyList | undefined): void => {
  const isInitialMount = useRef(true)

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false
    } else {
      return effect()
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps)
}

export default useUpdateEffect