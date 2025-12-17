import Counter from "./Counter";
import Calculator from "./Calculator";
import MessageCard from "./MessageCard";

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
        title="React Props"
        message="Props allow data to be passed to components."
      />

      <MessageCard
        title="Reusable Component"
        message="This card component is reused multiple times."
      />

      <MessageCard
        title="Assignment Complete"
        message="Q3 implemented successfully."
      />
    </div>
  );
}

export default App;
