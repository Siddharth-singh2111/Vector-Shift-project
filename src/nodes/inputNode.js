import React, { useState } from 'react';
import BaseNode from './BaseNode';

function InputNode({ id, data }) {
  const [currName, setCurrName] = useState(data?.inputName || id.replace('customInput-', 'input_'));
  const [inputType, setInputType] = useState(data?.inputType || 'Text');

  const handleNameChange = (e) => setCurrName(e.target.value);
  const handleTypeChange = (e) => setInputType(e.target.value);

  return (
    <BaseNode
      title="Input Node"
      outputs={[`${id}-value`]}
      customStyle={{ backgroundColor: '#e3f2fd' }}
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <label>
          Name:
          <input
            type="text"
            value={currName}
            onChange={handleNameChange}
            style={{ width: '100%' }}
          />
        </label>
        <label>
          Type:
          <select value={inputType} onChange={handleTypeChange} style={{ width: '100%' }}>
            <option value="Text">Text</option>
            <option value="File">File</option>
          </select>
        </label>
      </div>
    </BaseNode>
  );
}

export default InputNode;
