import React, { useState, useEffect, useRef } from 'react';
import { Handle, Position } from 'reactflow';
import BaseNode from './BaseNode';

function TextNode({ id, data }) {
  const [text, setText] = useState(data?.text || '{{input}}');
  const [variables, setVariables] = useState([]);
  const textareaRef = useRef(null);

  // Extract {{variables}} from text
  const extractVariables = (str) => {
    const regex = /{{(.*?)}}/g;
    const matches = [];
    let match;
    while ((match = regex.exec(str)) !== null) {
      if (!matches.includes(match[1])) {
        matches.push(match[1]);
      }
    }
    return matches;
  };

  // Update handles when text changes
  useEffect(() => {
    setVariables(extractVariables(text));
  }, [text]);

  // Auto-resize textarea height
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, [text]);

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  return (
    <BaseNode
      title="Text Node"
      inputs={variables}
      outputs={[`${id}-output`]}
      customStyle={{ backgroundColor: '#f0f4c3' }}
    >
      <textarea
        ref={textareaRef}
        value={text}
        onChange={handleTextChange}
        placeholder="Enter text with {{variables}}"
        style={{
          width: '100%',
          minHeight: '40px',
          resize: 'none',
          border: '1px solid #ccc',
          borderRadius: '6px',
          padding: '6px',
          fontFamily: 'inherit',
          fontSize: '14px',
        }}
      />
    </BaseNode>
  );
}

export default TextNode;
