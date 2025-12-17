import Counter from "./Counter";
import Calculator from "./Calculator";
import MessageCard from "./MessageCard";
import UserProfile from "./UserProfile";

function App() {
  return (
    <div>
      <Counter />
      <Calculator />

      <MessageCard
        title="Welcome"
        message="This is the first message card."
      />

      <MessageCard
        title="Reusable Component"
        message="Props make components reusable."
      />

      <UserProfile />
    </div>
  );
}

export default App;
