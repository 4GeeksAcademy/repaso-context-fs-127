import {
  User,
  HeartPulse,
  Calendar,
  Shield,
  Sparkles,
  Eye,
} from "lucide-react";

export function CharacterCardDetail({ character }) {
  if (!character) return null;

  const isAlive = character.status !== "Deceased";

  return (
    <div className="card shadow" style={{ width: "25rem" }}>
      <img
        src={character.photo}
        alt={character.name}
        className="card-img-top"
        style={{ height: "350px", objectFit: "cover" }}
      />

      <div className="card-body">
        <div className="d-flex justify-content-between align-items-center mb-2">
          <h3 className="card-title mb-0">{character.name}</h3>

          <span
            className={`badge ${isAlive ? "bg-success" : "bg-danger"}`}
          >
            <HeartPulse size={14} className="me-1" />
            {isAlive ? "Vivo" : "Fallecido"}
          </span>
        </div>

        <p className="text-muted mb-3">
          <Shield size={14} className="me-1" />
          {character.gender} · {character.eyeColor} · {character.hairColor}
        </p>

        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <User size={16} className="me-2" />
            <strong>Actor:</strong> {character.portrayedBy}
          </li>

          <li className="list-group-item">
            <Calendar size={16} className="me-2" />
            <strong>Nacimiento:</strong> {character.born}
          </li>

          <li className="list-group-item">
            <Sparkles size={16} className="me-2" />
            <strong>Ocupación:</strong>{" "}
            {character.occupation?.join(", ") || "Desconocida"}
          </li>

          <li className="list-group-item">
            <Eye size={16} className="me-2" />
            <strong>Residencia:</strong>{" "}
            {character.residence?.join(", ") || "Desconocida"}
          </li>
        </ul>

        {character.aliases?.length > 0 && (
          <div className="mt-3">
            <strong>Alias:</strong> {character.aliases.join(", ")}
          </div>
        )}

        {character.otherRelations?.length > 0 && (
          <div className="mt-2">
            <strong>Relaciones:</strong>{" "}
            {character.otherRelations.join(", ")}
          </div>
        )}
      </div>
    </div>
  );
}
