/**
 * ProfileField – a reusable field row showing a bold label
 * and a value with an optional leading icon.
 *
 * Props:
 *   label  (string)               – field heading
 *   value  (string | number)      – field content
 *   icon   (React element | null) – optional icon rendered before value
 */
function ProfileField({ label, value, icon }) {
  return (
    <div className="profile-field">
      <h2 className="profile-field__label">{label}</h2>

      <div className="profile-field__value-row">
        {icon && <span className="profile-field__icon">{icon}</span>}
        <span className="profile-field__value">{value}</span>
      </div>
    </div>
  );
}

export default ProfileField;
