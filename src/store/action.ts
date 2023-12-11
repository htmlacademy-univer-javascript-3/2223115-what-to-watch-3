import { createAction } from '@reduxjs/toolkit';
import { Genre } from '../types/genre';
import { UserData } from '../types/user-data';

export const changeGenre = createAction<Genre>('wtw/changeGenre');

export const redirectToRoute = createAction<string>('wtw/redirectToRoute');

export const setUserInfo = createAction<UserData | null>('user/setUserInfo');
