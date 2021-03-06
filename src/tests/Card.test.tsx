import { render, screen } from '@testing-library/react';
import { CardRank } from '../components/card/CardRank';


test('card rank of < 10 renders as normal number', () => {
    render(<CardRank rank={8} />);
    expect(screen.getByText('8')).toBeInTheDocument();
  });

test('card rank of 10 renders as letter A', () => {
    render(<CardRank rank={10} />);
    expect(screen.getByText('A')).toBeInTheDocument();
  });
