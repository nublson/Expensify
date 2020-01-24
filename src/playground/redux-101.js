import { createStore } from 'redux'

// Actions Generator --> To create actions
const incrementCount = ({ incrementBy = 1 } = {}) => ({
	type: 'INCREMENT',
	incrementBy
})

const decrementCount = ({ decrementBy = 1 } = {}) => ({
	type: 'DECREMENT',
	decrementBy
})

const setCount = ({ count }) => ({ type: 'SET', count })

const resetCount = () => ({ type: 'RESET' })

const ReduxTest = () => {
	// Store
	const store = createStore((state = { count: 0 }, action) => {
		switch (action.type) {
			case 'INCREMENT':
				return {
					count: state.count + action.incrementBy
				}
			case 'DECREMENT':
				return {
					count: state.count - action.decrementBy
				}
			case 'RESET':
				return {
					count: 0
				}
			case 'SET':
				return {
					count: action.count
				}
			default:
				return state
		}
	})

	// Subscribe --> To watch the store changes
	store.subscribe(() => {
		console.log(store.getState())
	})

	// Actions --> To change the state value
	store.dispatch(incrementCount({ incrementBy: 5 }))

	store.dispatch(incrementCount())

	store.dispatch(resetCount())

	store.dispatch(decrementCount())

	store.dispatch(decrementCount({ decrementBy: 10 }))

	store.dispatch(setCount({ count: -100 }))
}

export default ReduxTest
