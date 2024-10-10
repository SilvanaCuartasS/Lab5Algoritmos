import { AppState } from '../types/storeTypes';

import { Actions, BackgroundActions } from '../types/storeTypes';

export const reducer = (currentAction: Actions, currentState: AppState): AppState => {
	console.log(currentAction);
	const { action, payload } = currentAction;

	switch (action) {
		case BackgroundActions.CHANGEBACKGROUND:
			return {
				...currentState,
				backgroundColor: payload,
			};

		default:
			return currentState;
	}
};