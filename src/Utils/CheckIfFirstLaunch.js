// concept link: https://stackoverflow.com/questions/40715266/how-to-detect-first-launch-in-react-native

import { AsyncStorage } from 'react-native';

const HAS_LAUNCHED = 'hasLaunched';

const setAppLaunched = () => {
    AsyncStorage.setItem(HAS_LAUNCHED, 'true');
}

export const CheckIfFirstLaunch = async () => {
    try {
        const hasLaunched = await AsyncStorage.getItem(HAS_LAUNCHED);
        if (hasLaunched === null) {
            setAppLaunched();
            return true;
        }
        return false;
    } catch (error) {
        console.log("ERROR: ", error);
        return false;
    }
}