import React from 'react';

const DirectorsList = (props) => {
    const renderDirectors = (directors) => (
        directors ?
            directors.map((item, i) => (
                <div key={i}>
                    {item.name}
                </div>
            )) : null
    )
    return (
        <div>
            {renderDirectors(props.data.directors)}
        </div>
    );
}

export default DirectorsList;