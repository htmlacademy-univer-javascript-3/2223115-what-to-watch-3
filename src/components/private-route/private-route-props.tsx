import { AuthorizationStatus } from "../../const/const"

export type PrivateRouteProps = {
  authorizationStatus: AuthorizationStatus;
  children: JSX.Element;
}
