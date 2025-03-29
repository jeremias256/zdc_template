import { loadCustomer } from "customer";
import { setStatus, startLoadingStatus } from "./customerSlice";
export const starLoadingCustomer = () => {
    return async (dispatch, getState) => {
        const { uid } = getState().auth;
        dispatch(startLoadingStatus({ isLoadingStatus: true }));
        if (!uid) throw new Error('El uid del usuario no existe');

        const resp = await loadCustomer(uid)
        dispatch(setStatus(resp))
    }
};