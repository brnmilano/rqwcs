import { reqUpdateUser } from "@/api/put-user";
import { useMutation } from "@tanstack/react-query";
import { memo, useState } from "react";

function PostQuery() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const mutation = useMutation({
    mutationFn: (data: any) => reqUpdateUser(data),
    onSuccess: (data) => {
      console.log("Atualização bem-sucedida:", data);

      alert("Usuário atualizado com sucesso!");
    },
    onError: (error) => {
      console.error("Erro ao atualizar:", error);

      alert("Falha ao atualizar o usuário.");
    },
  });

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    const updateData = {
      name: {
        firstName,
        lastName,
      },
    };

    mutation.mutate(updateData);
  };

  return (
    <div className="p-10">
      <h1 className="pb-10 text-5xl">Página teste - Post Query</h1>

      <form onSubmit={handleSubmit}>
        <div className="mb-6 grid gap-6 md:grid-cols-2">
          <div>
            <label
              htmlFor="firstName"
              className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
            >
              Nome
            </label>

            <input
              type="text"
              id="firstName"
              className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
              required
              value={firstName}
              onChange={(event) => setFirstName(event.target.value)}
            />
          </div>

          <div>
            <label
              htmlFor="lastName"
              className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
            >
              Sobrenome
            </label>
            <input
              type="text"
              id="lastName"
              className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
              required
              value={lastName}
              onChange={(event) => setLastName(event.target.value)}
            />
          </div>
        </div>

        <button
          className="mb-2 me-2 rounded-lg bg-blue-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300"
          type="submit"
          disabled={mutation.isPending}
        >
          {mutation.isPending ? "Atualizando..." : "Atualizar"}
        </button>
      </form>
    </div>
  );
}

export default memo(PostQuery);
