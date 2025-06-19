import React from 'react';
import BaseNode from './BaseNode';

function LlmNode({ id }) {
  return (
    <BaseNode
      title="LLM Node"
      inputs={[`${id}-system`, `${id}-prompt`]}
      outputs={[`${id}-response`]}
      customStyle={{ backgroundColor: '#e1bee7' }}
    >
      <div>This is an LLM.</div>
    </BaseNode>
  );
}

export default LlmNode;
