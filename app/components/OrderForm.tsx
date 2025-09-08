'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

interface OrderFormProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function OrderForm({ isOpen, onClose }: OrderFormProps) {
  const [formData, setFormData] = useState({
    // Customer Information
    customerName: 'John Doe2',
    customerEmail: 'johnbhai.doe@example.com',
    customerPhone: '+1-555-123-4567',
    
    // Pickup Information
    pickupName: 'AL Furkan Water Supply',
    pickupAddress: '123 Water Street',
    pickupCity: 'New York',
    pickupState: 'NY',
    pickupZipCode: '10001',
    pickupPhone: '+1-555-987-6543',
    
    // Delivery Information
    deliveryName: 'John Doe',
    deliveryAddress: '456 Delivery Avenue',
    deliveryCity: 'New York',
    deliveryState: 'NY',
    deliveryZipCode: '10002',
    deliveryPhone: '+1-555-123-4567',
    
    // Package Information
    packageWeight: '25.5',
    packageDescription: 'Premium bottled water delivery - Spring Water, Purified Water, Mineral Water'
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Prepare API payload according to the structure
    const apiPayload = {
      apiKey: "dms_678fdaba57bbf51432469dc3d1d586e41edc7da38c7b1266325907dac6c8acde",
      customer: {
        name: formData.customerName,
        email: formData.customerEmail,
        phone: formData.customerPhone
      },
      pickup: {
        name: formData.pickupName,
        address: formData.pickupAddress,
        city: formData.pickupCity,
        state: formData.pickupState,
        zipCode: formData.pickupZipCode,
        phone: formData.pickupPhone
      },
      delivery: {
        name: formData.deliveryName,
        address: formData.deliveryAddress,
        city: formData.deliveryCity,
        state: formData.deliveryState,
        zipCode: formData.deliveryZipCode,
        phone: formData.deliveryPhone
      },
      package: {
        weight: parseFloat(formData.packageWeight),
        description: formData.packageDescription
      }
    };
    
    try {
      // Make API call to the delivery service
      const response = await fetch('https://delivery-ms-five.vercel.app/api/delivery-orders', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(apiPayload),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      console.log('API Response:', result);
      
      // Show success message (you can add a toast notification here)
      alert('Order submitted successfully!');
      
      // Close form and reset
      setIsSubmitting(false);
      onClose();
      
      // Reset form to default values
      setFormData({
        customerName: 'John Doe',
        customerEmail: 'john.doe@example.com',
        customerPhone: '+1-555-123-4567',
        pickupName: 'AL Furkan Water Supply',
        pickupAddress: '123 Water Street',
        pickupCity: 'New York',
        pickupState: 'NY',
        pickupZipCode: '10001',
        pickupPhone: '+1-555-987-6543',
        deliveryName: 'John Doe',
        deliveryAddress: '456 Delivery Avenue',
        deliveryCity: 'New York',
        deliveryState: 'NY',
        deliveryZipCode: '10002',
        deliveryPhone: '+1-555-123-4567',
        packageWeight: '25.5',
        packageDescription: 'Premium bottled water delivery - Spring Water, Purified Water, Mineral Water'
      });
      
    } catch (error) {
      console.error('API Error:', error);
      alert(`Error submitting order: ${error instanceof Error ? error.message : 'Unknown error'}`);
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-white rounded-3xl shadow-2xl max-w-5xl w-full max-h-[90vh] overflow-y-auto"
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            {/* Header */}
            <div className="sticky top-0 bg-white border-b border-slate-200 px-8 py-6 rounded-t-3xl">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-3xl font-bold text-slate-800">Place Your Order</h2>
                  <p className="text-slate-600">Complete your water delivery order</p>
                </div>
                <button
                  onClick={onClose}
                  className="w-10 h-10 rounded-full bg-slate-100 hover:bg-slate-200 transition-colors flex items-center justify-center"
                >
                  ✕
                </button>
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="p-8">
              <div className="grid lg:grid-cols-2 gap-8">
                {/* Left Column - Customer & Pickup Info */}
                <div className="space-y-6">
                  {/* Customer Information */}
                  <div>
                    <h3 className="text-xl font-semibold text-slate-800 mb-4">Customer Information</h3>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          name="customerName"
                          value={formData.customerName}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                          placeholder="Enter customer full name"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          name="customerEmail"
                          value={formData.customerEmail}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                          placeholder="Enter customer email"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          name="customerPhone"
                          value={formData.customerPhone}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                          placeholder="Enter customer phone"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Pickup Information */}
                  <div>
                    <h3 className="text-xl font-semibold text-slate-800 mb-4">Pickup Information</h3>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">
                          Pickup Name *
                        </label>
                        <input
                          type="text"
                          name="pickupName"
                          value={formData.pickupName}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                          placeholder="Enter pickup location name"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">
                          Pickup Address *
                        </label>
                        <input
                          type="text"
                          name="pickupAddress"
                          value={formData.pickupAddress}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                          placeholder="Enter pickup street address"
                        />
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-slate-700 mb-2">
                            Pickup City *
                          </label>
                          <input
                            type="text"
                            name="pickupCity"
                            value={formData.pickupCity}
                            onChange={handleInputChange}
                            required
                            className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                            placeholder="Enter pickup city"
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-slate-700 mb-2">
                            Pickup State *
                          </label>
                          <input
                            type="text"
                            name="pickupState"
                            value={formData.pickupState}
                            onChange={handleInputChange}
                            required
                            className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                            placeholder="Enter pickup state"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-slate-700 mb-2">
                            Pickup ZIP Code *
                          </label>
                          <input
                            type="text"
                            name="pickupZipCode"
                            value={formData.pickupZipCode}
                            onChange={handleInputChange}
                            required
                            className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                            placeholder="Enter pickup ZIP code"
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-slate-700 mb-2">
                            Pickup Phone *
                          </label>
                          <input
                            type="tel"
                            name="pickupPhone"
                            value={formData.pickupPhone}
                            onChange={handleInputChange}
                            required
                            className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                            placeholder="Enter pickup phone"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Column - Delivery & Package Info */}
                <div className="space-y-6">
                  {/* Delivery Information */}
                  <div>
                    <h3 className="text-xl font-semibold text-slate-800 mb-4">Delivery Information</h3>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">
                          Delivery Name *
                        </label>
                        <input
                          type="text"
                          name="deliveryName"
                          value={formData.deliveryName}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                          placeholder="Enter delivery recipient name"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">
                          Delivery Address *
                        </label>
                        <input
                          type="text"
                          name="deliveryAddress"
                          value={formData.deliveryAddress}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                          placeholder="Enter delivery street address"
                        />
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-slate-700 mb-2">
                            Delivery City *
                          </label>
                          <input
                            type="text"
                            name="deliveryCity"
                            value={formData.deliveryCity}
                            onChange={handleInputChange}
                            required
                            className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                            placeholder="Enter delivery city"
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-slate-700 mb-2">
                            Delivery State *
                          </label>
                          <input
                            type="text"
                            name="deliveryState"
                            value={formData.deliveryState}
                            onChange={handleInputChange}
                            required
                            className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                            placeholder="Enter delivery state"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-slate-700 mb-2">
                            Delivery ZIP Code *
                          </label>
                          <input
                            type="text"
                            name="deliveryZipCode"
                            value={formData.deliveryZipCode}
                            onChange={handleInputChange}
                            required
                            className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                            placeholder="Enter delivery ZIP code"
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-slate-700 mb-2">
                            Delivery Phone *
                          </label>
                          <input
                            type="tel"
                            name="deliveryPhone"
                            value={formData.deliveryPhone}
                            onChange={handleInputChange}
                            required
                            className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                            placeholder="Enter delivery phone"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Package Information */}
                  <div>
                    <h3 className="text-xl font-semibold text-slate-800 mb-4">Package Information</h3>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">
                          Package Weight (kg) *
                        </label>
                        <input
                          type="number"
                          name="packageWeight"
                          value={formData.packageWeight}
                          onChange={handleInputChange}
                          required
                          step="0.1"
                          min="0.1"
                          className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                          placeholder="Enter package weight in kg"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">
                          Package Description *
                        </label>
                        <textarea
                          name="packageDescription"
                          value={formData.packageDescription}
                          onChange={handleInputChange}
                          required
                          rows={4}
                          className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none"
                          placeholder="Enter detailed package description"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-4 px-8 rounded-2xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                    whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                    whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                  >
                    {isSubmitting ? (
                      <div className="flex items-center justify-center space-x-2">
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        <span>Processing Order...</span>
                      </div>
                    ) : (
                      'Submit Order'
                    )}
                  </motion.button>
                </div>
              </div>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
