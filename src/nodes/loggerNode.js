import React from 'react';
import BaseNode from './BaseNode';

function LoggerNode() {
  return (
    <BaseNode
      title="Logger Node"
      inputs={['log']}
      customStyle={{ backgroundColor: '#fce4ec' }}
    >
      <div>Logs value to console</div>
    </BaseNode>
  );
}

export default LoggerNode;
