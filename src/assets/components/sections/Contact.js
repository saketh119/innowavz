// src/components/sections/Contact.jsx
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';

const Contact = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState(null);

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      setSubmitMessage({
        type: 'success',
        text: 'Your message has been sent successfully!'
      });
    } catch (error) {
      setSubmitMessage({
        type: 'danger',
        text: 'Failed to send message. Please try again.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container-xxl py-5">
      <div className="container py-5 px-lg-5">
        <div className="wow fadeInUp" data-wow-delay="0.1s">
          <p className="section-title text-secondary justify-content-center"><span></span>Contact Us<span></span></p>
          <h1 className="text-center mb-5">Contact For Any Query</h1>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-7">
            <div className="wow fadeInUp" data-wow-delay="0.3s">
              <p className="text-center mb-4">
                Have questions or want to discuss a project? Fill out the form below and we'll get back to you as soon as possible.
              </p>
              
              {submitMessage && (
                <div className={`alert alert-${submitMessage.type} text-center`}>
                  {submitMessage.text}
                </div>
              )}
              
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="row g-3">
                  <div className="col-md-6">
                    <div className="form-floating">
                      <input
                        type="text"
                        className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                        id="name"
                        placeholder="Your Name"
                        {...register('name', { required: 'Name is required' })}
                      />
                      <label htmlFor="name">Your Name</label>
                      {errors.name && (
                        <div className="invalid-feedback">
                          {errors.name.message}
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-floating">
                      <input
                        type="email"
                        className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                        id="email"
                        placeholder="Your Email"
                        {...register('email', { 
                          required: 'Email is required',
                          pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: 'Invalid email address'
                          }
                        })}
                      />
                      <label htmlFor="email">Your Email</label>
                      {errors.email && (
                        <div className="invalid-feedback">
                          {errors.email.message}
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-floating">
                      <input
                        type="text"
                        className={`form-control ${errors.subject ? 'is-invalid' : ''}`}
                        id="subject"
                        placeholder="Subject"
                        {...register('subject', { required: 'Subject is required' })}
                      />
                      <label htmlFor="subject">Subject</label>
                      {errors.subject && (
                        <div className="invalid-feedback">
                          {errors.subject.message}
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-floating">
                      <textarea
                        className={`form-control ${errors.message ? 'is-invalid' : ''}`}
                        placeholder="Leave a message here"
                        id="message"
                        style={{ height: '150px' }}
                        {...register('message', { required: 'Message is required' })}
                      ></textarea>
                      <label htmlFor="message">Message</label>
                      {errors.message && (
                        <div className="invalid-feedback">
                          {errors.message.message}
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="col-12">
                    <button
                      className="btn btn-primary w-100 py-3"
                      type="submit"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;