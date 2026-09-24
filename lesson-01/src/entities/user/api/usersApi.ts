import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { User } from '../model/types';

export const usersApi = createApi({
    reducerPath: 'usersApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://dummyjson.com' }),
    tagTypes: ['Users'],
    endpoints: (build) => ({
        getUsers: build.query<User[], void>({
            query: () => 'users',
            transformResponse: (response: { users: User[] }) => response.users,
            providesTags: ['Users'],
        })
    }),
});

export const { useGetUsersQuery } = usersApi;