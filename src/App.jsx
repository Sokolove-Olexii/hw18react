import { createContext, useContext, useState, useRef } from "react";

const UserContext = createContext();

const App = () => {
  const [userName, setUserName] = useState("Guest");

  return (
    <UserContext.Provider value={{ userName, setUserName }}>
      <section>
        <UserForm />
        <UserInfo />
      </section>
    </UserContext.Provider>
  );
};

const UserForm = () => {
  const { setUserName } = useContext(UserContext);
  const inputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = inputRef.current.value.trim();
    if (name) {
      setUserName(name);
      inputRef.current.value = "";
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input ref={inputRef} placeholder="Введіть своє ім'я" />
      <button type="submit">Зберегти</button>
    </form>
  );
};

const UserInfo = () => {
  const { userName } = useContext(UserContext);
  return (
    <p>
      Користувач: <b>{userName}</b>
    </p>
  );
};

export default App;
