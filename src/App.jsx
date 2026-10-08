import { useState } from "react";
import ProfileScreen from "./components/ProfileScreen";

/* ── Static user data (passed down as props) ─────────────────── */
const user = {
  name: "Chathumi Kaveesha",
  email: "jkvckaveesha@students.nsbm.ac.lk",
  points: 0,
  avatar: "/avatar.png",
};

/**
 * App – root component.
 * Owns the `points` state so the FAB can increment it from ProfileScreen.
 */
function App() {
  const [points, setPoints] = useState(user.points);

  /** Called by the FAB inside ProfileScreen */
  const handleAddPoints = () => {
    console.log("FAB clicked");
    setPoints((prev) => prev + 1);
  };

  return (
    <ProfileScreen
      user={{ ...user, points }}
      onAddPoints={handleAddPoints}
    />
  );
}

export default App;
