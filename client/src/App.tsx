import { useEffect } from "react";
import { trpc } from "./trpc";

const App = () => {
  const fetchUser = async () => {
    const user = await trpc.user.getUserById.query("0");
    console.log(user);
  };

  const createUser = async () => {
    const user = await trpc.user.createUser.mutate({
      name: "raj",
    });

    console.log(user);
  };

  useEffect(() => {
    fetchUser();
    createUser();
  }, []);
  return <h1>Hello tRPC</h1>;
};

export default App;
