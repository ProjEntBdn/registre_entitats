import PropTypes from "prop-types";

const EntityDetails = ({ entity }) => {
    const fields = [
        { key: "ID", label: "Identificador" },
        { key: "ANY_CONSTITUCIO", label: "Any constitució" },
    ];

    const classificationFields = [
        { key: "SECTORSEMANTIC1", label: "Classificació general" },
        { key: "SECTORSEMANTIC2", label: "Classificació específica" },
    ];

    const contactFields = [{ key: "WEB", label: "Web" }];

    return (
        <div
            className="entity-details"
            role="region"
            aria-labelledby="entity-name"
        >
            <h2 id="entity-name">{entity.ENTITAT}</h2>
            <div className="entity-info">
                {fields.map(
                    ({ key, label }) =>
                        entity[key] && (
                            <div key={key} className="entity-row">
                                <strong>{label}:</strong> {entity[key]}
                            </div>
                        )
                )}
                <div className="entity-group">
                    {classificationFields.map(
                        ({ key, label }) =>
                            entity[key] && (
                                <div
                                    key={key}
                                    className="entity-row classification"
                                >
                                    <strong>{label}:</strong> {entity[key]}
                                </div>
                            )
                    )}
                </div>
                <div className="entity-group">
                    {contactFields.map(
                        ({ key, label }) =>
                            entity[key] && (
                                <div key={key} className="entity-row contact">
                                    <strong>{label}:</strong> {entity[key]}
                                </div>
                            )
                    )}
                </div>
            </div>
        </div>
    );
};

EntityDetails.propTypes = {
    entity: PropTypes.shape({
        ID: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
            .isRequired,
        ENTITAT: PropTypes.string.isRequired,
        ANY_CONSTITUCIO: PropTypes.string,
        SECTORSEMANTIC1: PropTypes.string,
        SECTORSEMANTIC2: PropTypes.string,
        WEB: PropTypes.string,
    }).isRequired,
};

export default EntityDetails;
