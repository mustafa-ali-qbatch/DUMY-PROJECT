"use client"
import React, { useState } from 'react';

export default  function ReactionComponent () {
  const [reactions, setReactions] = useState({
    like: 0,
    love: 0,
    laugh: 0,
  });

  const handleReaction = (reactionType) => {
    setReactions((prevReactions) => ({
      ...prevReactions,
      [reactionType]: prevReactions[reactionType] + 1,
    }));
  };

  return (
    <div>
      <div className="reactions">
        <span onClick={() => handleReaction('like')}>👍 {reactions.like}</span>
        <span onClick={() => handleReaction('love')}>❤️ {reactions.love}</span>
        <span onClick={() => handleReaction('laugh')}>😄 {reactions.laugh}</span>
        {/* Add more reaction emojis and types as needed */}
      </div>
    </div>
  );
};
