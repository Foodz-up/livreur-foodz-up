import {
  getStoreAccessors,
  GetterHandler,
  MutationHandlerWithPayload
} from 'vuex-typescript'
import store from '../../store'
import { RootState } from '~/store/root'

export default abstract class BaseStoreService<T> {
  protected mutations!: Record<string, (state: T, payload: any) => void>
  protected storeApi = getStoreAccessors<T, RootState>('')
  protected commit<TPayload> (
    handler: MutationHandlerWithPayload<T, TPayload>,
    payload: TPayload
  ) {
    this.storeApi.commit(handler)(store(), payload)
  }

  protected read<TResult> (
    handler: GetterHandler<T, RootState, TResult>
  ): TResult {
    return this.storeApi.read<TResult>(handler)(store())
  }
}
