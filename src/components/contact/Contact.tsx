'use client';
import { z } from 'zod';
import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import s from './contact.module.scss';
import { contact_props, t_contact_data } from 'types/types';

const dataSchema = z.object({
  email: z.string().email({
    message: 'Please enter a valid email address',
  }),
  message: z.string().min(1, { message: 'a comment is required' }),
});

type FieldValues = z.infer<typeof dataSchema>;

export default function Contact({ serverFn }: contact_props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    resolver: zodResolver(dataSchema),
  });

  const onSubmit: SubmitHandler<FieldValues> = (data: t_contact_data) => {
    serverFn(data);
  };

  return (
    <form className={s.contact__form} onSubmit={handleSubmit(onSubmit)}>
      <img
        className={s.contact_form_icon}
        src='images/email.png'
        alt='dialog-icon'
      />
      {/* post title */}
      <label className={s.input_label} htmlFor='email'>
        Your email
      </label>
      <input className={s.form_textinput} id='email' {...register('email')} />
      {errors.email?.message && (
        <p className={s.error_message}>{errors.email?.message}</p>
      )}
      {/* post author */}
      <label className={s.input_label} htmlFor='comment'>
        Your comment
      </label>
      <textarea id='comment' {...register('message')} />
      {errors.message?.message && (
        <p className={s.error_message}>{errors.message?.message}</p>
      )}
      <button className={s.submit_button} type='submit'>
        Send
      </button>
    </form>
  );
}
