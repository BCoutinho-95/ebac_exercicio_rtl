import { fireEvent, render, screen } from '@testing-library/react';
import Post from '.';
import PostComment from '.';

describe('Teste para o componente PostComment', () => {
    test('Deve renderizar o componente corretamente', () => {
        render(<PostComment/>);
        expect(screen.getByText('Comentar')).toBeInTheDocument();
    });

    
    test('Deve adicionar dois comentários', () => {
        render(<PostComment />);
        fireEvent.change(screen.getByTestId('comentario-textarea'), {
            target: {
                value: 'Primeiro Comentário'
            }
        });
        fireEvent.click(screen.getByTestId('comentario-button'));


        fireEvent.change(screen.getByTestId('comentario-textarea'), {
            target: {
                value: 'Segundo Comentário'
            }
        });
        fireEvent.click(screen.getByTestId('comentario-button'));

        expect(screen.getAllByTestId('elemento-comentario')).toHaveLength(2);    
    });
});