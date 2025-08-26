import { useEffect, useState } from 'react';

/**
 * Hook para debouncing de valores.
 * @param {any} valor - Valor a debilitar
 * @param {number} delay - Milisegundos de espera
 * @returns {any} - Valor debounced
 */
export default function useDebounce(valor, delay = 500) {
  const [valorDebounced, setValorDebounced] = useState(valor);

  useEffect(() => {
    const handler = setTimeout(() => {
      setValorDebounced(valor);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [valor, delay]);

  return valorDebounced;
}