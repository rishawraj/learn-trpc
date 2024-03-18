import { useState } from "react";
import { trpc } from "./trpc";

const App = () => {
  // const { data, isLoading } = trpc.user.getUserById.useQuery("1");

  const [name, setName] = useState("");
  const { data, isLoading, refetch, isError } = trpc.user.getUsers.useQuery();
  const mutation = trpc.user.createUser.useMutation({
    onSuccess: () => refetch(),
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    setName("");
    mutation.mutate({ name });
    e.preventDefault();
  };

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error</div>;

  // return <div>{data?.name}</div>;

  return (
    <div>
      <ul>
        {(data ?? []).map((user) => {
          return <li key={user.id}>{user.name}</li>;
        })}
      </ul>

      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" value={name} onChange={handleChange} />
        <button type="submit">Create</button>
      </form>
    </div>
  );
};

export default App;
