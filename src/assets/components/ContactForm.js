import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';

const ContactForm = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      setSubmitStatus({ type: 'success', message: 'Your message has been sent successfully!' });
      reset();
    } catch (error) {
      setSubmitStatus({ type: 'danger', message: 'Failed to send message. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="wow fadeInUp" data-wow-delay="0.1s">
      <h2 className="mb-4">Send us a message</h2>
      
      {submitStatus && (
        <div className={`alert alert-${submitStatus.type}`}>
          {submitStatus.message}
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
              {isSubmitting ? (
                <>
                  <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                  Sending...
                </>
              ) : (
                <>
                  <FontAwesomeIcon icon={faPaperPlane} className="me-2" />
                  Send Message
                </>
              )}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;