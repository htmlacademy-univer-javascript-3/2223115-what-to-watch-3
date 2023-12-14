import { State } from '../../types/state';
import { NameSpace, AuthorizationStatus } from '../../const';
import { UserData } from '../../types/user-data';

export const getAuthorizationStatus = (state: State): AuthorizationStatus => state[NameSpace.User].authorizationStatus;
export const getAuthorizationCheckedStatus = (state: State): boolean => state[NameSpace.User].authorizationStatus !== AuthorizationStatus.Unknown;
export const getUserInfo = (state: State): UserData | undefined => state[NameSpace.User].userInfo;
