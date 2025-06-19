import React from 'react';
import BaseNode from './BaseNode';

function TimeNode() {
  return (
    <BaseNode
      title="Time Node"
      outputs={['timestamp']}
      customStyle={{ backgroundColor: '#b3e5fc' }}
    >
      <div>Emits current timestamp</div>
    </BaseNode>
  );
}

export default TimeNode;
