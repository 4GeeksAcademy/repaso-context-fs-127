import { User, HeartPulse, Eye, Home } from "lucide-react";
import { Link } from "react-router-dom";

export function CharacterCardResume({ character }) {
  if (!character) return null;

  const isAlive = character.status !== "Deceased";

  return (
    <div className="card h-100 shadow-sm" style={{ width: "25rem" }}>
      <img
        src={character.photo}
        alt={character.name}
        className="card-img-top"
        style={{ height: "220px", objectFit: "cover" }}
      />

      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{character.name}</h5>

        <p className="card-text mb-1">
          <Home size={14} className="me-2" />
          <strong>Afiliación:</strong>{" "}
          {character.affiliation?.[0] || "Desconocida"}
        </p>

        <p className="card-text mb-2">
          <User size={14} className="me-2" />
          <strong>Actor:</strong> {character.portrayedBy}
        </p>

        <span
          className={`badge mb-3 align-self-start ${
            isAlive ? "bg-success" : "bg-danger"
          }`}
        >
          <HeartPulse size={14} className="me-1" />
          {isAlive ? "Vivo" : "Fallecido"}
        </span>

        <Link
          to={`/detail/${character._id}`}
          className="btn btn-primary mt-auto d-flex align-items-center justify-content-center"
        >
          <Eye size={16} className="me-2" />
          Ver detalle
        </Link>
      </div>
    </div>
  );
}
