import React from 'react';

interface SparklineProps {
  data: number[];
  color: string;
}

export const Sparkline: React.FC<SparklineProps> = ({ data, color }) => {
  const points = data.map((value, index) => {
    return `${index},${value}`;
  }).join(' ');

  const minValue = Math.min(...data);
  const maxValue = Math.max(...data);

  // Normalize the data to fit within the SVG's height (e.g., 0 to 20)
  const normalizedData = data.map(value => {
    const range = maxValue - minValue;
    if (range === 0) {
      return 10; // To center the line if all values are the same
    }
    return 20 - ((value - minValue) / range) * 20; // Invert so higher values are lower in the SVG
  });
  
  const normalizedPoints = normalizedData.map((value, index) => {
    return `${index * 10},${value}`; // Scale x-coordinate for better spacing
  }).join(' ');
  

  return (
    <svg width="100%" height="20">
      <polyline
        fill="none"
        stroke={color}
        strokeWidth="2"
        points={normalizedPoints}
      />
    </svg>
  );
};
