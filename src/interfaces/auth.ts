export interface ErrorResponse {
   data: {
      message: string;
   };
}

export interface DataAuthResponse {
   accessToken: string;
   message: string;
   expires: number;
   data: IUser;
}

export interface AuthSignupInput {
   email: string;
   userName: string;
   password: string;
   avatar?: string;
   confirmPassword: string;
}

export interface AuthLoginInput {
    email: string;
    password: string;
}

export interface IUser {
   userName: string;
   email: string;
   password: string;
   phoneNumber?: string;
   address?: string;
   avatar?: string;
   role: 'admin' | 'member';
   carId?: string;
   notification?: string[];
   voucher: string[];
   state: boolean;
}

export interface TokenResponse {
    accessToken: string;
    expries: number;
    data: IUser
}
