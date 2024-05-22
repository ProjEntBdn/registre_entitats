import { useEffect, useState } from "react";
import EntityDetails from "./EntityDetails";
import Papa from "papaparse";

const EntityLoader = () => {
    const [entity, setEntity] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const entityId = urlParams.get("entityId");

        if (!entityId || isNaN(entityId)) {
            setError("ID d'entitat no vàlid");
            return;
        }

        const partNumber = entityId % 10;

        const fetchCsvPart = async () => {
            try {
                const response = await fetch(
                    `/registre_entitats/csv/entitats_${partNumber}.csv`
                );
                const data = await response.text();
                const parsedData = Papa.parse(data, { header: true }).data;
                const foundEntity = parsedData.find(
                    (ent) => ent.ID === entityId
                );

                if (foundEntity) {
                    setEntity(foundEntity);
                } else {
                    setError("Entitat no trobada.");
                }
            } catch (error) {
                setError("Error en carregar les dades.");
            }
        };

        fetchCsvPart();
    }, []);

    return (
        <div className="entity-loader" role="region" aria-live="polite">
            {error && (
                <div className="error" role="alert">
                    {error}
                </div>
            )}
            {entity && <EntityDetails entity={entity} />}
        </div>
    );
};

export default EntityLoader;
