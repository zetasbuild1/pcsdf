"use client";

import React, { useState } from "react";
import {
  User,
  Mail,
  Phone,
  Building,
  ArrowRight,
  CheckCircle2,
  Send,
  Loader2,
} from "lucide-react";
import styles from "./ContactForm.module.css";
import ContactInfoCards from "./ContactInfoCards";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    organization: "",
    topic: "general",
    subject: "",
    message: "",
    consent: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value, type } = e.target;
    if (type === "checkbox") {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message || !formData.consent) {
      return;
    }

    setIsSubmitting(true);
    // Simulate submission latency
    await new Promise((resolve) => setTimeout(resolve, 800));
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setFormData({
      name: "",
      email: "",
      phone: "",
      organization: "",
      topic: "general",
      subject: "",
      message: "",
      consent: false,
    });
    setIsSubmitted(false);
  };

  return (
    <section className={styles.section} id="contact-form-section">
      <div className={styles.container}>
        <div className={styles.layout}>
          {/* Left: Contact Form Card */}
          <div className={styles.formCard}>
            <span className={styles.tag}>SEND US A MESSAGE</span>
            <h2 className={styles.formTitle}>How Can We Help You?</h2>
            <p className={styles.formSubtitle}>
              Please provide details about your inquiry and our team will get in
              touch with you promptly.
            </p>

            {isSubmitted ? (
              <div className={styles.successBox}>
                <CheckCircle2 size={48} className={styles.successIcon} />
                <h3 className={styles.successTitle}>Thank You for Reaching Out!</h3>
                <p className={styles.successText}>
                  Your message has been received by our Secretariat. A dedicated
                  representative will review your request and get back to you
                  shortly at <strong>{formData.email}</strong>.
                </p>
                <button
                  type="button"
                  className={styles.resetBtn}
                  onClick={handleReset}
                >
                  <span>Send Another Message</span>
                  <ArrowRight size={14} />
                </button>
              </div>
            ) : (
              <form className={styles.form} onSubmit={handleSubmit}>
                {/* Row 1: Name & Email */}
                <div className={styles.rowTwo}>
                  <div className={styles.fieldGroup}>
                    <label htmlFor="contact-name" className={styles.label}>
                      Full Name <span className={styles.required}>*</span>
                    </label>
                    <div className={styles.inputWrapper}>
                      <User size={16} className={styles.inputIcon} aria-hidden="true" />
                      <input
                        id="contact-name"
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g. Dr. Jane Doe"
                        className={styles.input}
                      />
                    </div>
                  </div>

                  <div className={styles.fieldGroup}>
                    <label htmlFor="contact-email" className={styles.label}>
                      Email Address <span className={styles.required}>*</span>
                    </label>
                    <div className={styles.inputWrapper}>
                      <Mail size={16} className={styles.inputIcon} aria-hidden="true" />
                      <input
                        id="contact-email"
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="name@organization.org"
                        className={styles.input}
                      />
                    </div>
                  </div>
                </div>

                {/* Row 2: Phone & Organization */}
                <div className={styles.rowTwo}>
                  <div className={styles.fieldGroup}>
                    <label htmlFor="contact-phone" className={styles.label}>
                      Phone Number (Optional)
                    </label>
                    <div className={styles.inputWrapper}>
                      <Phone size={16} className={styles.inputIcon} aria-hidden="true" />
                      <input
                        id="contact-phone"
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+1 (555) 000-0000"
                        className={styles.input}
                      />
                    </div>
                  </div>

                  <div className={styles.fieldGroup}>
                    <label htmlFor="contact-org" className={styles.label}>
                      Organization / Affiliation
                    </label>
                    <div className={styles.inputWrapper}>
                      <Building size={16} className={styles.inputIcon} aria-hidden="true" />
                      <input
                        id="contact-org"
                        type="text"
                        name="organization"
                        value={formData.organization}
                        onChange={handleChange}
                        placeholder="e.g. University / NGO / Ministry"
                        className={styles.input}
                      />
                    </div>
                  </div>
                </div>

                {/* Row 3: Topic & Subject */}
                <div className={styles.rowTwo}>
                  <div className={styles.fieldGroup}>
                    <label htmlFor="contact-topic" className={styles.label}>
                      Inquiry Category <span className={styles.required}>*</span>
                    </label>
                    <div className={styles.inputWrapper}>
                      <select
                        id="contact-topic"
                        name="topic"
                        value={formData.topic}
                        onChange={handleChange}
                        className={styles.select}
                      >
                        <option value="general">General Inquiry</option>
                        <option value="partnerships">Partnership &amp; Funding</option>
                        <option value="research">Research &amp; Knowledge Hub</option>
                        <option value="community">Community Initiatives</option>
                        <option value="media">Media &amp; Press Relations</option>
                        <option value="volunteering">Volunteering &amp; Youth Action</option>
                      </select>
                    </div>
                  </div>

                  <div className={styles.fieldGroup}>
                    <label htmlFor="contact-subject" className={styles.label}>
                      Subject Line <span className={styles.required}>*</span>
                    </label>
                    <div className={styles.inputWrapper}>
                      <input
                        id="contact-subject"
                        type="text"
                        name="subject"
                        required
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="Brief summary of your inquiry"
                        className={styles.input}
                      />
                    </div>
                  </div>
                </div>

                {/* Row 4: Message */}
                <div className={styles.fieldGroup}>
                  <label htmlFor="contact-message" className={styles.label}>
                    Your Message <span className={styles.required}>*</span>
                  </label>
                  <div className={styles.textareaWrapper}>
                    <textarea
                      id="contact-message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Please describe how we can collaborate, questions you have, or background on your initiative..."
                      className={styles.textarea}
                    />
                  </div>
                </div>

                {/* Consent Checkbox */}
                <label className={styles.checkboxLabel}>
                  <input
                    type="checkbox"
                    name="consent"
                    required
                    checked={formData.consent}
                    onChange={handleChange}
                    className={styles.checkbox}
                  />
                  <span>
                    I agree to the privacy terms and consent to PCSDF storing and
                    processing my contact details to respond to this request.
                  </span>
                </label>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={styles.submitBtn}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 size={16} className="animate-spin" />
                      <span>Sending Message...</span>
                    </>
                  ) : (
                    <>
                      <Send size={15} />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Right: Contact Information Cards */}
          <ContactInfoCards />
        </div>
      </div>
    </section>
  );
}
