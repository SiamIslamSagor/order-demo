'use client';

import { useState } from 'react';

export default function Home() {
  const [formData, setFormData] = useState({
    // Customer details
    customerName: 'John Smith',
    customerEmail: 'john.smith@example.com',
    customerPhone: '+1 (555) 123-4567',
    
    // Pickup details
    pickupName: 'John Smith',
    pickupAddress: '123 Main Street',
    pickupCity: 'New York',
    pickupState: 'NY',
    pickupZipCode: '10001',
    pickupPhone: '+1 (555) 123-4567',
    
    // Delivery details
    deliveryName: 'Jane Doe',
    deliveryAddress: '456 Oak Avenue',
    deliveryCity: 'Los Angeles',
    deliveryState: 'CA',
    deliveryZipCode: '90210',
    deliveryPhone: '+1 (555) 987-6543',
    
    // Package details
    packageWeight: '2.5',
    packageDescription: 'Electronics package'
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [orderDetails, setOrderDetails] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Transform form data to match API structure
      const apiPayload = {
        apiKey: "dms_df995064c65a7e049691d1690bc6fad2a4b3eba11a364aba5cf3bb1364923223",
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

      // API endpoint pointing to your server
      const response = await fetch('http://localhost:3000/api/delivery-orders', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(apiPayload),
      });

      if (response.ok) {
        const result = await response.json();
        setSubmitStatus('success');
        setOrderDetails(result);
        // Reset form to default values after successful submission
        setFormData({
          customerName: 'John Smith',
          customerEmail: 'john.smith@example.com',
          customerPhone: '+1 (555) 123-4567',
          pickupName: 'John Smith',
          pickupAddress: '123 Main Street',
          pickupCity: 'New York',
          pickupState: 'NY',
          pickupZipCode: '10001',
          pickupPhone: '+1 (555) 123-4567',
          deliveryName: 'Jane Doe',
          deliveryAddress: '456 Oak Avenue',
          deliveryCity: 'Los Angeles',
          deliveryState: 'CA',
          deliveryZipCode: '90210',
          deliveryPhone: '+1 (555) 987-6543',
          packageWeight: '2.5',
          packageDescription: 'Electronics package'
        });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Fast & Reliable Delivery Service
          </h1>
          <p className="text-xl text-gray-600">
            Create your delivery order and we'll handle the rest
          </p>
        </div>

        {/* Form */}
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Customer Details Section */}
            <div className="border-b border-gray-200 pb-6">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
                <span className="bg-purple-100 text-purple-600 p-2 rounded-full mr-3">
                  👤
                </span>
                Customer Details
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Customer Name *
                  </label>
                  <input
                    type="text"
                    name="customerName"
                    value={formData.customerName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter customer name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Customer Email *
                  </label>
                  <input
                    type="email"
                    name="customerEmail"
                    value={formData.customerEmail}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter customer email"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Customer Phone *
                  </label>
                  <input
                    type="tel"
                    name="customerPhone"
                    value={formData.customerPhone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter customer phone"
                  />
                </div>
              </div>
            </div>

            {/* Pickup Details Section */}
            <div className="border-b border-gray-200 pb-6">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
                <span className="bg-blue-100 text-blue-600 p-2 rounded-full mr-3">
                  📦
                </span>
                Pickup Details
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Pickup Contact Name *
                  </label>
                  <input
                    type="text"
                    name="pickupName"
                    value={formData.pickupName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter pickup contact name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Pickup Phone *
                  </label>
                  <input
                    type="tel"
                    name="pickupPhone"
                    value={formData.pickupPhone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter pickup phone number"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Pickup Address *
                  </label>
                  <input
                    type="text"
                    name="pickupAddress"
                    value={formData.pickupAddress}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter pickup address"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Pickup City *
                  </label>
                  <input
                    type="text"
                    name="pickupCity"
                    value={formData.pickupCity}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter pickup city"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Pickup State *
                  </label>
                  <input
                    type="text"
                    name="pickupState"
                    value={formData.pickupState}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter pickup state"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Pickup ZIP Code *
                  </label>
                  <input
                    type="text"
                    name="pickupZipCode"
                    value={formData.pickupZipCode}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter pickup ZIP code"
                  />
                </div>
              </div>
            </div>

            {/* Delivery Details Section */}
            <div className="border-b border-gray-200 pb-6">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
                <span className="bg-green-100 text-green-600 p-2 rounded-full mr-3">
                  🚚
                </span>
                Delivery Details
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Delivery Contact Name *
                  </label>
                  <input
                    type="text"
                    name="deliveryName"
                    value={formData.deliveryName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter delivery contact name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Delivery Phone *
                  </label>
                  <input
                    type="tel"
                    name="deliveryPhone"
                    value={formData.deliveryPhone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter delivery phone number"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Delivery Address *
                  </label>
                  <input
                    type="text"
                    name="deliveryAddress"
                    value={formData.deliveryAddress}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter delivery address"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Delivery City *
                  </label>
                  <input
                    type="text"
                    name="deliveryCity"
                    value={formData.deliveryCity}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter delivery city"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Delivery State *
                  </label>
                  <input
                    type="text"
                    name="deliveryState"
                    value={formData.deliveryState}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter delivery state"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Delivery ZIP Code *
                  </label>
                  <input
                    type="text"
                    name="deliveryZipCode"
                    value={formData.deliveryZipCode}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter delivery ZIP code"
                  />
                </div>
              </div>
            </div>

            {/* Package Details Section */}
            <div className="border-b border-gray-200 pb-6">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
                <span className="bg-purple-100 text-purple-600 p-2 rounded-full mr-3">
                  📦
                </span>
                Package Details
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Package Weight (lbs) *
                  </label>
                  <input
                    type="number"
                    name="packageWeight"
                    value={formData.packageWeight}
                    onChange={handleInputChange}
                    required
                    min="0.1"
                    step="0.1"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter weight in pounds"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Package Description *
                  </label>
                  <input
                    type="text"
                    name="packageDescription"
                    value={formData.packageDescription}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Describe the package contents"
                  />
                </div>
              </div>
            </div>



            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-semibold py-4 px-8 rounded-lg text-lg transition-colors duration-200 flex items-center justify-center mx-auto"
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Creating Order...
                  </>
                ) : (
                  'Create Delivery Order'
                )}
              </button>
            </div>

            {/* Status Messages */}
            {submitStatus === 'success' && (
              <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
                <div className="mb-4">
                  <svg className="mx-auto h-12 w-12 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-green-800 mb-2">
                  Delivery Order Created Successfully!
                </h3>
                <p className="text-green-700 mb-4">
                  We'll contact you soon with tracking details.
                </p>
                
                {orderDetails && (
                  <div className="bg-white border border-green-200 rounded-lg p-4 text-left max-w-md mx-auto">
                    <h4 className="font-semibold text-gray-900 mb-3">Order Details:</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Order ID:</span>
                        <span className="font-mono font-semibold text-gray-900">{orderDetails.orderId}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Tracking #:</span>
                        <span className="font-mono font-semibold text-gray-900">{orderDetails.trackingNumber}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Est. Delivery:</span>
                        <span className="font-semibold text-gray-900">{orderDetails.estimatedDelivery}</span>
                      </div>
                    </div>
                  </div>
                )}
                
                <div className="mt-6">
                  <button
                    onClick={() => {
                      setSubmitStatus(null);
                      setOrderDetails(null);
                    }}
                    className="bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200"
                  >
                    Create New Order
                  </button>
                </div>
              </div>
            )}
            
            {submitStatus === 'error' && (
              <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-center">
                <p className="text-red-800 font-medium">
                  ❌ There was an error creating your order. Please try again or contact support.
                </p>
              </div>
            )}
          </form>
        </div>

        {/* Footer */}
        <div className="text-center mt-8 text-gray-600">
          <p>Need help? Contact us at support@deliveryservice.com or call 1-800-DELIVERY</p>
        </div>
      </div>
    </div>
  );
}
