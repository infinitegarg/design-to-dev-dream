
import { useState, useEffect } from 'react';

interface SelectionPosition {
  x: number;
  y: number;
}

export const useTextSelection = (containerRef: React.RefObject<HTMLElement>) => {
  const [selectedText, setSelectedText] = useState('');
  const [position, setPosition] = useState<SelectionPosition | null>(null);

  useEffect(() => {
    const handleSelection = () => {
      const selection = window.getSelection();
      if (!selection || !containerRef.current) return;

      const text = selection.toString().trim();
      if (!text) {
        setSelectedText('');
        setPosition(null);
        return;
      }

      const range = selection.getRangeAt(0);
      const rect = range.getBoundingClientRect();
      
      // Only update if selection is within our container
      if (containerRef.current.contains(selection.anchorNode)) {
        setSelectedText(text);
        setPosition({
          x: rect.left + (rect.width / 2),
          y: rect.top + window.scrollY
        });
      }
    };

    document.addEventListener('mouseup', handleSelection);
    return () => document.removeEventListener('mouseup', handleSelection);
  }, [containerRef]);

  return { selectedText, position };
};
