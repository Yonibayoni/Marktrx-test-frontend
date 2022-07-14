import { createStore, applyMiddleware, combineReducers } from 'redux'
import reduxThunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { reducer as formReducer } from 'redux-form'
import { personReducer } from './reducers/personReducer'


const initialState: any = [
  {
    country: [],
    name: ""
  }
]

const reducer = combineReducers({
  form: formReducer,
  person: personReducer
})

const middleware = [reduxThunk]
const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
