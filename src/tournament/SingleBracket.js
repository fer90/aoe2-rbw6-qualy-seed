import React from 'react';
import Flag from 'react-world-flags';

function Player({ country, position, name, rating }) {
  return (
    <div style={{ display: 'grid', gridGap: '8px', gridTemplateColumns: '30px 30px 1fr 150px' }}>
      <div>{position}.</div>
      <Flag code={country} />
      <div><strong>{name}</strong></div>
      <div>(<strong>{rating.highest}</strong> - [{rating.current}])</div>
    </div>
  );
}

export default function SingleBracket({ playerOne, playerOnePosition, playerTwo, playerTwoPosition }) {
    return (
        <div style={{ border: '1px solid #fff', display: 'flex', flexDirection: 'column', gap: '8px', padding: '8px' }}>
            <Player position={playerOnePosition} name={playerOne.name} rating={{ current: playerOne.rating, highest: playerOne.highest_rating }} country={playerOne.country} />
            <Player position={playerTwoPosition} name={playerTwo.name} rating={{ current: playerTwo.rating, highest: playerTwo.highest_rating }} country={playerTwo.country} />
        </div>
    );
}
