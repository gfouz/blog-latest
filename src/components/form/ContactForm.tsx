'use client';
import * as React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import ErrorWarning from 'components/errorwarning/ErrorWarning';
import Button from 'components/specialbutton/Button';
import { contactService } from 'services/contactService';
import { dataSchema, InputData } from 'schemas/form.input.schema';
import { useContactService } from 'hooks/useContactService';
import SubmitButton from './SubmitButton';

const defaultMessage = 'Hello Giovanoti. I want to hire you!';

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<InputData>({
    resolver: zodResolver(dataSchema),
  });

  const { data, error, fetchData } = useContactService();

  console.log(`this is from custom errorXXX:  ${error}`);

  const onSubmit: SubmitHandler<InputData> = async (data) => {
    const newdata = { ...data, message: defaultMessage };
    console.log(errors);
    fetchData(newdata);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <header className='footer-title'>Newsletter</header>
      <fieldset className='form-control w-80'>
        <label className='label'>
          {errors?.email?.message ? (
            <span className='label-text text-red-500'>
              {errors?.email?.message}
            </span>
          ) : (
            <span className='label-text'>Enter your email address</span>
          )}
        </label>
        <div className='join'>
          <input
            {...register('email')}
            placeholder='username@site.com'
            className='input input-bordered join-item'
          />
          <SubmitButton />
        </div>
      </fieldset>
      {error && <p>{String(error)}</p>}
    </form>
  );
};
export default ContactForm;
