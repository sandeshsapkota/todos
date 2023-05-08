import store from '../../store/store'
import { useSelector } from 'react-redux'

/**
 * CUSTOM HOOK FOR REDUX STORE
 * @returns
 */
const useStoreSelector = () => {
    /**
     * REDUX STORE TYPE
     */
    type ReduxStoreInterface = ReturnType<typeof store.getState>

    /**
     * RETURNS STORE
     */

    return useSelector((store: ReduxStoreInterface) => store)
}

export default useStoreSelector
