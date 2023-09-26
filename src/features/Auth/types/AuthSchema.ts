export interface AuthSchema {
  accessToken: string;
  expire: string;
  isAuth: boolean;
  isLoading: boolean;
  error?: string;
}