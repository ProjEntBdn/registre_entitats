import EntityLoader from "./components/EntityLoader";
import "./styles.css";

function App() {
    return (
        <div className="App">
            <header>
                <p className="warning" role="alert">
                    Aquesta no és una pàgina oficial. El seu objectiu és mostrar
                    la informació del registre municipal de les entitats
                    recollides en aquest{" "}
                    <a
                        href="https://umap.openstreetmap.fr/ca/map/entitats-actives-de-badalona_1027376#14/41.4484/2.2448"
                        rel="noopener noreferrer"
                        target="_blank"
                    >
                        mapa
                    </a>
                    . Les dades anonimitzades, actualitzades el 2 d&apos;octubre
                    de 2023, i el procés per anonimitzar-les es poden trobar al{" "}
                    <a
                        href="https://github.com/ProjEntBdn/dades_obertes_ajuntament"
                        rel="noopener noreferrer"
                        target="_blank"
                    >
                        repositori de dades obertes
                    </a>
                    . Per més informació, consulteu el{" "}
                    <a
                        href="https://x.com/ProjEntBdn"
                        rel="noopener noreferrer"
                        target="_blank"
                    >
                        compte a X del projecte
                    </a>
                    .
                </p>
            </header>
            <EntityLoader />
        </div>
    );
}

export default App;
