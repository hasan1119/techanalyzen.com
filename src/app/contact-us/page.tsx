"use client";

import React, { useState } from "react";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // Here you would send the form data to your backend or email service
    setSubmitted(true);
  }

  return (
    <section className='container min-h-[80vh] py-16 px-4 md:px-8 lg:px-0 mx-auto max-w-2xl'>
      <h1 className='text-4xl md:text-5xl font-bold text-center mb-4'>
        Contact Us
      </h1>
      <p className='text-muted-foreground text-lg mb-8 text-center'>
        We&rsquo;d love to hear from you! Please fill out the form below and our
        team will get back to you as soon as possible.
      </p>
      <div className='rounded-lg shadow-md dark:shadow-gray-800 p-6'>
        {submitted ? (
          <div className='text-center text-green-600 font-semibold text-lg'>
            Thank you for contacting us! We will respond soon.
          </div>
        ) : (
          <form className='space-y-5' onSubmit={handleSubmit}>
            <div>
              <label htmlFor='name' className='block font-medium mb-1'>
                Name
              </label>
              <input
                type='text'
                id='name'
                name='name'
                value={form.name}
                onChange={handleChange}
                required
                className='w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary'
                placeholder='Your Name'
              />
            </div>
            <div>
              <label htmlFor='email' className='block font-medium mb-1'>
                Email
              </label>
              <input
                type='email'
                id='email'
                name='email'
                value={form.email}
                onChange={handleChange}
                required
                className='w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary'
                placeholder='you@example.com'
              />
            </div>
            <div>
              <label htmlFor='subject' className='block font-medium mb-1'>
                Subject
              </label>
              <input
                type='text'
                id='subject'
                name='subject'
                value={form.subject}
                onChange={handleChange}
                required
                className='w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary'
                placeholder='Subject'
              />
            </div>
            <div>
              <label htmlFor='message' className='block font-medium mb-1'>
                Message
              </label>
              <textarea
                id='message'
                name='message'
                value={form.message}
                onChange={handleChange}
                required
                rows={5}
                className='w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary'
                placeholder='Type your message here...'
              />
            </div>
            <button
              type='submit'
              className='w-full bg-primary text-white font-semibold py-2 px-4 rounded-md hover:bg-primary/90 transition-colors'>
              Send Message
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
