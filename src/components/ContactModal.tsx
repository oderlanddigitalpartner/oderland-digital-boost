import { useState, useEffect } from 'react';
import { X, Send, Phone, Mail, MapPin, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactModal = ({ isOpen, onClose }: ContactModalProps) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    company: '',
    email: '',
    phone: '',
    interest: '',
    message: '',
    consent: false,
    honeypot: '' // Hidden field for bot detection
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
  const [isFormValid, setIsFormValid] = useState(false);
  const [submitTime, setSubmitTime] = useState<number | null>(null);

  // Track when form was opened for rate limiting
  useEffect(() => {
    if (isOpen) {
      setSubmitTime(Date.now());
    }
  }, [isOpen]);

  // Close modal on Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Validate form
  useEffect(() => {
    const required = formData.firstName && formData.lastName && formData.email && 
                   formData.interest && formData.message && formData.consent;
    setIsFormValid(!!required);
  }, [formData]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Rate limiting check (minimum 3 seconds)
    const timeElapsed = submitTime ? Date.now() - submitTime : 0;
    if (timeElapsed < 3000) {
      setSubmitMessage('Bitte warten Sie einen Moment vor dem Absenden.');
      return;
    }

    // Honeypot check
    if (formData.honeypot) {
      setSubmitMessage('Spam erkannt. Bitte versuchen Sie es erneut.');
      return;
    }

    if (!isFormValid) {
      setSubmitMessage('Bitte füllen Sie alle Pflichtfelder aus.');
      return;
    }

    setIsSubmitting(true);
    setSubmitMessage('');

    try {
      // Simulate API call - in real implementation, send to backend
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      setSubmitMessage('Vielen Dank! Wir melden uns innerhalb von 24 Stunden bei Ihnen.');
      
      // Reset form after successful submission
      setTimeout(() => {
        setFormData({
          firstName: '',
          lastName: '',
          company: '',
          email: '',
          phone: '',
          interest: '',
          message: '',
          consent: false,
          honeypot: ''
        });
        onClose();
        setSubmitMessage('');
      }, 3000);

    } catch (error) {
      setSubmitMessage('Ein Fehler ist aufgetreten. Bitte versuchen Sie es erneut oder kontaktieren Sie uns direkt.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black bg-opacity-50 transition-opacity"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="bg-gradient-to-r from-brand-800 to-brand-600 text-white p-6 rounded-t-2xl">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold mb-2">Kostenloses Erstgespräch</h2>
              <p className="text-brand-100">
                Lassen Sie uns über Ihre digitalen Ziele sprechen.
              </p>
            </div>
            <button
              onClick={onClose}
              className="text-white hover:text-brand-200 p-2 rounded-full hover:bg-white/10 transition-colors"
              aria-label="Schließen"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6">
          {/* Honeypot field - hidden from users */}
          <input
            type="text"
            name="honeypot"
            value={formData.honeypot}
            onChange={handleInputChange}
            style={{ display: 'none' }}
            tabIndex={-1}
            autoComplete="off"
          />

          <div className="grid md:grid-cols-2 gap-4 mb-4">
            <div>
              <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                Vorname <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                required
                value={formData.firstName}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-400 focus:border-transparent"
              />
            </div>
            
            <div>
              <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                Nachname <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                required
                value={formData.lastName}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-400 focus:border-transparent"
              />
            </div>
          </div>

          <div className="mb-4">
            <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
              Unternehmen
            </label>
            <input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-400 focus:border-transparent"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-4 mb-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                E-Mail <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-400 focus:border-transparent"
              />
            </div>
            
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                Telefon (optional)
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-400 focus:border-transparent"
              />
            </div>
          </div>

          <div className="mb-4">
            <label htmlFor="interest" className="block text-sm font-medium text-gray-700 mb-2">
              Interesse <span className="text-red-500">*</span>
            </label>
            <select
              id="interest"
              name="interest"
              required
              value={formData.interest}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-400 focus:border-transparent"
            >
              <option value="">Bitte wählen Sie...</option>
              <option value="website">Website</option>
              <option value="social-media">Social Media</option>
              <option value="ki-automatisierung">KI-Automatisierung</option>
              <option value="paketberatung">Paketberatung</option>
              <option value="sonstiges">Sonstiges</option>
            </select>
          </div>

          <div className="mb-6">
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
              Nachricht <span className="text-red-500">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={4}
              value={formData.message}
              onChange={handleInputChange}
              placeholder="Erzählen Sie uns von Ihrem Projekt..."
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-400 focus:border-transparent resize-none"
            />
          </div>

          <div className="mb-6">
            <label className="flex items-start space-x-3">
              <input
                type="checkbox"
                name="consent"
                required
                checked={formData.consent}
                onChange={handleInputChange}
                className="mt-1 h-4 w-4 text-brand-600 focus:ring-brand-400 border-gray-300 rounded"
              />
              <span className="text-sm text-gray-700">
                <span className="text-red-500">*</span> Ich habe die{' '}
                <button
                  type="button"
                  className="text-brand-600 hover:text-brand-800 underline"
                  onClick={() => alert('Datenschutzhinweise würden hier angezeigt')}
                >
                  Datenschutzhinweise
                </button>{' '}
                gelesen und stimme der Verarbeitung meiner Daten zu.
              </span>
            </label>
          </div>

          {/* Submit Message */}
          {submitMessage && (
            <div className={`mb-4 p-4 rounded-lg ${
              submitMessage.includes('Dank') || submitMessage.includes('melden') 
                ? 'bg-green-50 text-green-800 border border-green-200' 
                : 'bg-red-50 text-red-800 border border-red-200'
            }`} role="alert">
              {submitMessage}
            </div>
          )}

          {/* Actions */}
          <div className="flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0 sm:space-x-4 pt-6 border-t border-gray-200">
            <div className="text-sm text-gray-500">
              <p>Oder rufen Sie direkt an:</p>
              <p className="font-medium text-brand-600">+49 176 24961833</p>
            </div>
            
            <div className="flex items-center space-x-3">
              <Button
                type="button"
                variant="outline"
                onClick={onClose}
                className="px-6 py-3"
              >
                Abbrechen
              </Button>
              
              <Button
                type="submit"
                disabled={!isFormValid || isSubmitting}
                className="btn-primary flex items-center space-x-2 px-6 py-3"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span>Wird gesendet...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Nachricht senden</span>
                  </>
                )}
              </Button>
            </div>
          </div>

          {/* Alternative contact */}
          <div className="mt-6 pt-6 border-t border-gray-200">
            <p className="text-sm text-gray-600 mb-4 text-center">
              Oder buchen Sie direkt einen Termin:
            </p>
            <div className="flex justify-center">
              <button
                type="button"
                className="text-brand-600 hover:text-brand-800 font-medium flex items-center space-x-2"
                onClick={() => alert('Calendly-Integration würde hier öffnen')}
              >
                <ExternalLink className="w-4 h-4" />
                <span>Termin direkt buchen</span>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactModal;