import { makeVar } from '@apollo/client/cache';
import { Login } from '../../GraphQL/authentication/types/Login';

export const idMe = makeVar<string>('');
export const login = makeVar<Login | null>(null);
export const provider = makeVar<string>('');
export const email = makeVar<string>('');
