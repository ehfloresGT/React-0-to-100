import { render, screen } from '@testing-library/react';
import { GifGrid } from '../../src/components/GifGrid';
import { useFetchGifs } from '../../src/hooks/useFetchGifs';

jest.mock('../../src/hooks/useFetchGifs');

describe('Pruebas en <GifGrid /> ...', () => {

  const category = 'One Punch';
  
  test('Mostrar el loading inicialmente ...', () => {

    useFetchGifs.mockReturnValue({
      images: [],
      isLoading: true
    });

    render(<GifGrid category={category} />);

    expect(screen.getByText('Cargando ...'));
    expect(screen.getByText(category));
  });

  test('Mostrar items cuando se cargan las imagenes con useFetchGifs ...', () => {

    const gifs = [
      {
        id: 'VXJWhaO7afRe',
        title: 'One Punch Man GIF',
        url: 'https://media1.giphy.com/media/VXJWhaO7afRe/giphy.gif?cid=557e256fq6eblsak90npnnqmv5i04n5hi9emusmg03q5dym5&ep=v1_gifs_search&rid=giphy.gif&ct=g',
      },
      {
        id: 'arbHBoiUWUgmc',
        title: 'One Punch Man Preview GIF',
        url: 'https://media1.giphy.com/media/arbHBoiUWUgmc/giphy.gif?cid=557e256fq6eblsak90npnnqmv5i04n5hi9emusmg03q5dym5&ep=v1_gifs_search&rid=giphy.gif&ct=g',
      }
    ];

    useFetchGifs.mockReturnValue({
      images: gifs,
      isLoading: false
    });

    render(<GifGrid category={category} />);

    expect(screen.getAllByRole('img').length).toBe(2);

  });
  
});
