import React from 'react';
import BaseNode from './BaseNode';

function DecisionNode() {
  return (
    <BaseNode
      title="Decision Node"
      inputs={['condition']}
      outputs={['true', 'false']}
      customStyle={{ backgroundColor: '#d7ccc8' }}
    >
      <div>Branches based on condition</div>
    </BaseNode>
  );
}

export default DecisionNode;
