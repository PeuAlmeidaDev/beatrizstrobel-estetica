import { FC } from 'react';

interface DecorativeCornersProps {
  size?: number;
  color?: string;
  className?: string;
}

const DecorativeCorners: FC<DecorativeCornersProps> = ({
  size = 12,
  color = 'var(--gold)',
  className = ''
}) => {
  return (
    <div className={`absolute inset-0 pointer-events-none ${className}`}>
      <div className={`absolute top-4 left-4 w-${size} h-${size} border-t-2 border-l-2`} style={{ borderColor: color }}></div>
      <div className={`absolute top-4 right-4 w-${size} h-${size} border-t-2 border-r-2`} style={{ borderColor: color }}></div>
      <div className={`absolute bottom-4 left-4 w-${size} h-${size} border-b-2 border-l-2`} style={{ borderColor: color }}></div>
      <div className={`absolute bottom-4 right-4 w-${size} h-${size} border-b-2 border-r-2`} style={{ borderColor: color }}></div>
    </div>
  );
};

export default DecorativeCorners; 