import React from 'react';
import BaseNode from './BaseNode';

function MathNode() {
  return (
    <BaseNode
      title="Math Node"
      inputs={['a', 'b']}
      outputs={['result']}
      customStyle={{ backgroundColor: '#dcedc8' }}
    >
      <div>Adds inputs A and B</div>
    </BaseNode>
  );
}

export default MathNode;
