import { render, screen } from '@testing-library/react';
import App from './App';

describe('Test <App />', () => {
    test('Deve renderizar corretamente', () => {
        render(
            <App />
        );
        expect(screen.getByTestId('comentario-button')).toBeInTheDocument();
    });

})