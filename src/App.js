import { useState } from 'react';
import './App.css';
import Header from './Header';
import Recherche from './Recherche';
import LigneBus from './LigneBus';
import Footer from './Footer';
import StatReseau from './StatReseau';
import DetailLigne from './DetailLignes';

function App() {
  const [recherche, setRecherche] = useState('');
  const [ligneSelectionnee, setLigneSelectionnee] = useState(null);

const lignes = [
  {
    id: 1,
    numero: "1",
    depart: "Parcelles Assainies",
    arrivee: "Plateau",
    arrets: 14,
    listeArrets: [
      "Parcelles U14",
      "Parcelles U10",
      "Camberene",
      "Patte d'Oie",
      "Grand Dakar",
      "Colobane",
      "Ponty",
      "Plateau"
    ]
  },
  {
    id: 2,
    numero: "7",
    depart: "Guediawaye",
    arrivee: "Place Obe",
    arrets: 18,
    listeArrets: [
      "Guediawaye",
      "Pikine",
      "Thiaroye",
      "Keur Massar",
      "Grand Yoff",
      "Parcelles",
      "Liberte 6",
      "Place Obe"
    ]
  },
  {
    id: 3,
    numero: "15",
    depart: "Pikine",
    arrivee: "Medina",
    arrets: 12,
    listeArrets: [
      "Pikine Centre",
      "Thiaroye Gare",
      "Hann",
      "Colobane",
      "Fass",
      "Medina"
    ]
  },
  {
    id: 4,
    numero: "23",
    depart: "Ouakam",
    arrivee: "Grand Dakar",
    arrets: 10,
    listeArrets: [
      "Ouakam Village",
      "Mermoz",
      "Fann",
      "Point E",
      "Liberte 5",
      "Grand Dakar"
    ]
  },
  {
    id: 5,
    numero: "8",
    depart: "Almadies",
    arrivee: "Colobane",
    arrets: 16,
    listeArrets: [
      "Almadies",
      "Ngor",
      "Yoff",
      "Ouest Foire",
      "Liberte 6",
      "Colobane"
    ]
  },
  {
    id: 6,
    numero: "12",
    depart: "Yoff",
    arrivee: "Sandaga",
    arrets: 11,
    listeArrets: [
      "Yoff Village",
      "Aeroport LSS",
      "Parcelles U17",
      "Grand Yoff",
      "HLM",
      "Sandaga"
    ]
  }
  ,
    {
      id: 7, numero: "31", depart: "Fann", arrivee: "HLM", arrets: 9, couleur: "#c0392b",
      listeArrets: [
        "Fann", "Point E", "Liberté 6", "Liberté 5",
        "Liberté 3", "Liberté 1", "Grand Dakar", "HLM Marché", "HLM"
      ]
    },
    {
      id: 8, numero: "42", depart: "Liberté 6", arrivee: "Médina", arrets: 13, couleur: "#2980b9",
      listeArrets: [
        "Liberté 6", "Liberté 5", "Liberté 4", "Liberté 3", "Liberté 2",
        "Liberté 1", "Médina Nord", "Médina Marché", "Tilène", "Grand Dakar",
        "HLM", "Colobane", "Médina"
      ]
    },
    {
      id: 9, numero: "18", depart: "Dieuppeul", arrivee: "Sicap", arrets: 7, couleur: "#8e44ad",
      listeArrets: [
        "Dieuppeul", "Castors", "Liberté 6", "Sacré-Cœur",
        "Mermoz", "Sicap Liberté", "Sicap"
      ]
    },
    {
      id: 10, numero: "27", depart: "HLM", arrivee: "Sandaga", arrets: 15, couleur: "#d35400",
      listeArrets: [
        "HLM", "HLM Marché", "Grand Dakar", "Tilène", "Médina",
        "Liberté 1", "Liberté 2", "Liberté 3", "Liberté 4", "Liberté 5",
        "Liberté 6", "Sacré-Cœur", "Colobane", "Kermel", "Sandaga"
      ]
    },
  
];

  const lignesFiltrees = lignes.filter((l) =>
    l.depart.toLowerCase().includes(recherche.toLowerCase()) ||
    l.arrivee.toLowerCase().includes(recherche.toLowerCase()) ||
    l.numero.includes(recherche)
  );

  function handleClickLigne(ligne) {
    if (ligneSelectionnee && ligneSelectionnee.id === ligne.id) {
      setLigneSelectionnee(null);
    } else {
      setLigneSelectionnee(ligne);
    }
  }

  return (
    <div className="App">
      <Header />

      <main className="contenu">
        <Recherche
          valeur={recherche}
          onChange={setRecherche}
        />

        <p className="resultat-recherche">
          {lignesFiltrees.length} ligne
          {lignesFiltrees.length > 1 ? 's' : ''} trouvée
          {lignesFiltrees.length > 1 ? 's' : ''}
        </p>

        {lignesFiltrees.map((ligne) => (
          <LigneBus
            key={ligne.id}
            numero={ligne.numero}
            depart={ligne.depart}
            arrivee={ligne.arrivee}
            arrets={ligne.arrets}
            estSelectionnee={
              ligneSelectionnee &&
              ligneSelectionnee.id === ligne.id
            }
            onClick={() => handleClickLigne(ligne)}
          />
        ))}
        {ligneSelectionnee && (
          <DetailLigne ligne={ligneSelectionnee} />
        )}
      </main>

      <Footer />
    </div>
  );
}

export default App;