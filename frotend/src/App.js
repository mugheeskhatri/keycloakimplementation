import useAuth from "./hooks/useAuth";
import Protected from "./pages/Protected";
import Public from "./pages/Public";

function App() {
  const [isLogin, token] = useAuth();
  return isLogin ? <Protected token={token} /> : <Public />;
}

export default App;