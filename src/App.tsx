import { useQuery } from "@tanstack/react-query";
import type { UsersProps } from "./types/products";
import { getUsers } from "./api/put-user";

export default function App() {
  const {
    isLoading: isLoadingUsers,
    error: errorUsers,
    data: dataUsers,
  } = useQuery<UsersProps>({
    queryKey: [`users`],
    queryFn: getUsers,
  });

  if (isLoadingUsers) {
    return <div>Carregando...</div>;
  }

  if (errorUsers) {
    return <div>Erro ao carregar...</div>;
  }

  const userName = `${dataUsers?.[0]?.name?.firstname} ${dataUsers?.[0]?.name?.lastname}`;

  return (
    <div className="p-10">
      <ul className="max-w-md list-inside list-disc space-y-1 text-gray-500">
        Nome do usuário: {userName}
      </ul>
    </div>
  );
}
