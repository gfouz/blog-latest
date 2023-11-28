import { useState, useCallback } from 'react';
import { contactService } from 'services/contactService';
import { InputData } from 'schemas/form.input.schema';

const formspree_url = 'https://formspree.io/f/xdovlonj';

export const useContactService = () => {
  const [data, setData] = useState(undefined);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | undefined>(undefined);

  const fetchData = async (formdata: { email: string }) => {
    setLoading(true);
    try {
      const response: Response = await fetch(formspree_url, {
        cache: 'no-cache',
        method: 'POST',
        body: JSON.stringify(formdata),
        headers: {
          'content-type': 'application/json',
        },
      });

      if (!response.ok) throw new Error(response.statusText);

      const responseData = await response.json();

      setData(responseData);
    } catch (error) {
      setError((error as Error).message);
    } finally {
      setLoading(false);
    }
  };

  return { data, loading, error, fetchData };
};
