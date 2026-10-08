import { useState } from "react";
import { Mail, Star, Plus } from "lucide-react";
import ProfileField from "./ProfileField";
import "./ProfileScreen.css";

/**
 * ProfileScreen – full mobile "My Profile" screen.
 *
 * Props:
 *   user          – { name, email, points, avatar }
 *   onAddPoints   – callback fired by the FAB
 */
function ProfileScreen({ user, onAddPoints }) {
  const [imgError, setImgError] = useState(false);

  /* Extract initials for the fallback avatar */
  const initials = user.name
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <div className="profile-screen">
      {/* ── App bar ─────────────────────────────────────────────── */}
      <header className="app-bar">
        <h1 className="app-bar__title">My Profile</h1>
      </header>

      {/* ── Body ────────────────────────────────────────────────── */}
      <main className="profile-body">
        {/* Avatar section */}
        <section className="avatar-section">
          <div className="avatar-ring">
            {imgError ? (
              /* Fallback: initials on a coloured circle */
              <div className="avatar-fallback" aria-label={`${user.name} avatar`}>
                {initials}
              </div>
            ) : (
              <img
                className="avatar-img"
                src={user.avatar}
                alt={`${user.name}'s profile photo`}
                onError={() => setImgError(true)}
              />
            )}

            {/* Green check-mark badge */}
            <span className="avatar-badge" aria-label="Verified">
              <svg
                width="36"
                height="36"
                viewBox="0 0 36 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9 18L15 24L27 12"
                  stroke="#00e600"
                  strokeWidth="5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </div>
        </section>

        {/* Horizontal divider */}
        <hr className="profile-divider" />

        {/* Profile fields */}
        <section className="profile-fields">
          <ProfileField label="Name" value={user.name} />

          <ProfileField
            label="Email"
            value={user.email}
            icon={<Mail size={22} color="#000" strokeWidth={2} />}
          />

          <ProfileField
            label="Points"
            value={user.points}
            icon={<Star size={22} color="#000" fill="#000" strokeWidth={0} />}
          />
        </section>
      </main>

      {/* ── Floating Action Button ──────────────────────────────── */}
      <button
        className="fab"
        onClick={onAddPoints}
        aria-label="Add points"
      >
        <Plus size={28} color="#fff" strokeWidth={2.5} />
      </button>
    </div>
  );
}

export default ProfileScreen;
