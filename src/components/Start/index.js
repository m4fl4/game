import React from 'react';
import { Link } from 'react-router-dom';

function Start(props) {

    return (<>
        <div className="center">
            <Link to={`/Partida/2P`} className="btn btn-success mt-5">2 Players</Link>
            <Link to={`/Partida/4P`} className="btn btn-success mt-5">4 Players</Link>
            <Link to={`/Partida/8P`} className="btn btn-success mt-5">8 Players</Link>
        </div>
    </>)
}

export default Start;