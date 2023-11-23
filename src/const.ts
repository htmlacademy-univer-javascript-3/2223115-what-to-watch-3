export enum AppRoute {
  Main = '/',
  SignIn = 'login',
  MyList = 'mylist',
  Film = 'films',
  AddReview = 'review',
  Player = 'player',
  NotFound = '*',
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export enum APIRoute {
  Films = '/films',
  Promo = '/promo',
  Similar = '/similar',
  Favorite ='/favorite',
  Comments = '/comments',
  Login = '/login',
  Logout = '/logout'
}
