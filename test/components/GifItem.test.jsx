import { render, screen } from '@testing-library/react';
import { GifItem } from '../../src/components/GifItem';

describe('Testing ... <GifItem />', () => {

  const image = {
    id: 'VXJWhaO7afRe',
    title: 'One Punch Man GIF',
    url: 'https://media1.giphy.com/media/VXJWhaO7afRe/giphy.gif?cid=557e256fq6eblsak90npnnqmv5i04n5hi9emusmg03q5dym5&ep=v1_gifs_search&rid=giphy.gif&ct=g',
  };
  
  test('Generar y validar con el snapshot ...', () => {
    const {container} = render(<GifItem title={image.title} url={image.url} />);
    expect(container).toMatchSnapshot();
  });

  test('Mostrar la imagen con el URL y el ALT indicado.', () => {
    render(<GifItem title={image.title} url={image.url} />);
    const {src, alt} = screen.getByRole('img');
    expect(src).toBe(image.url);
    expect(alt).toBe(image.title);
  });

  test('Mostrar el titulo en el componente.', () => {
    render(<GifItem title={image.title} url={image.url} />);
    expect(screen.getByText(image.title)).toBeTruthy();
  });

});
