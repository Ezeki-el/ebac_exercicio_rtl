import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import PostComments from './PostComments';

test('Inserir dois comentários', () => {
const { getByTestId, getByText } = render(<PostComments />);

const input = getByTestId('comment-input');
const submitButton = getByText('Submit');

  // Insere o primeiro comentário
fireEvent.change(input, { target: { value: 'Primeiro comentário' } });
fireEvent.click(submitButton);

  // Insere o segundo comentário
fireEvent.change(input, { target: { value: 'Segundo comentário' } });
fireEvent.click(submitButton);

  // Verifica se ambos os comentários foram inseridos
expect(getByText('Primeiro comentário')).toBeInTheDocument();
expect(getByText('Segundo comentário')).toBeInTheDocument();
});
