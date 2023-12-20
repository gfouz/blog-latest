'use client';
import { useFormStatus } from 'react-dom';

function SubmitButton() {
  const status = useFormStatus();
  return (
    <button
      className='btn btn-primary join-item'
      type='submit'
      disabled={status.pending}
    >
      {status.pending ? 'Submitting...' : 'Subscribe'}
    </button>
  );
}
export default SubmitButton;
