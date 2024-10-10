import { BackgroundActions } from '../types/storeTypes';

export const changeBackground = (payload: any) => {
	return {
		action: BackgroundActions.CHANGEBACKGROUND,
		payload,
	};
};