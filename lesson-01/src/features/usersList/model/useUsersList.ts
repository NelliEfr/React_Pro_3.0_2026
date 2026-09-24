import { useGetUsersQuery } from 'entities/user'

export function useUsersList() {

    const { data = [], isLoading, error } = useGetUsersQuery();

    return {
      data,
      isLoading,
      error
    };
}
