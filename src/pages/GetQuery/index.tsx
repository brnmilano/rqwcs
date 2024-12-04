import { useQuery } from "@tanstack/react-query";
import { memo } from "react";
import { getUsers } from "@/api/get-user";
import type { UsersProps } from "@/types/users";

function GetQuery() {
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
    <>
      <div className="p-10">
        <h1 className="pb-10 text-5xl">Página teste - Get Query</h1>

        <div>
          <p>
            Nome do usuário:{" "}
            <span className="text-lg font-medium">{userName}</span>
          </p>
        </div>
      </div>
    </>
  );
}

export default memo(GetQuery);
