import './DetailLignes.css';

function DetailLigne({ ligne }) {
  const arrets = ligne?.listeArrets || [];

  return (
    <div className="detail-ligne">
      <h3 className="detail-titre">
        Ligne {ligne.numero} : {ligne.depart} &rarr; {ligne.arrivee}
      </h3>

      <p className="detail-info">
        {ligne.arrets} arrêts sur ce trajet
      </p>

      <div className="detail-arrets">
        <h4>Arrêts principaux :</h4>

        <ul className="detail-liste">
          {arrets.map((arret, index) => (
            <li key={index} className="detail-arret">
              <span className="arret-numero">{index + 1}</span>
              <span className="arret-nom">{arret}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default DetailLigne;