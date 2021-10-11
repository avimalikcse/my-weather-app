import { useCallback } from "react";
import { useDispatch } from "react-redux"
import { getWeatherDataAction, changeDate } from "../../actions/weatherApp/weatherAction";

/**
 * Hooks to be used in Weather Widgets Feature
 */
export const useWeatherHook = () => {

    const dispatch = useDispatch()

    const dispatchGetWeatherData = useCallback((city) => {
        dispatch(getWeatherDataAction(city));
    }, [dispatch]);

    const dispatchChangeDate = useCallback((date) => {
        dispatch(changeDate(date));
    }, [dispatch]);

    return {
        dispatchGetWeatherData,
        dispatchChangeDate
    }
}