import React from 'react';
import BaseNode from './BaseNode';

function ApiCallNode() {
  return (
    <BaseNode
      title="API Call Node"
      inputs={['trigger']}
      outputs={['response']}
      customStyle={{ backgroundColor: '#c8e6c9' }}
    >
      <div>Simulates an API call</div>
    </BaseNode>
  );
}

export default ApiCallNode;
