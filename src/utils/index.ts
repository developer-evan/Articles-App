import AsyncStorage from '@react-native-async-storage/async-storage';

export const fetchUser = async ({setUser}: {setUser: any}) => {
    const userString = await AsyncStorage.getItem('user');
    const user = userString ? JSON.parse(userString) : null;
    setUser(user);
    console.log(user, 'user');
};
