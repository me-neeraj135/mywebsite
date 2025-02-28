// src/components/ContactForm.jsx
import React from 'react'
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { EnvelopeIcon, PhoneIcon, UserIcon } from '@heroicons/react/24/outline'
import { useTranslation } from 'react-i18next'
const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const { t } = useTranslation()
  const onSubmit = (data) => {
    console.log(data)
    // Add your form submission logic here
  }

  const inputClasses = (error) =>
    `w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 ${
      error
        ? 'border-red-500 focus:ring-red-200'
        : 'border-gray-300 dark:border-gray-600 focus:border-blue-500 focus:ring-blue-200 dark:focus:ring-blue-800'
    } bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100`

  return (
    <div className=" container mx-auto  px-4 sm:px-6 lg:px-8  mb-9 ">
      <h2 className="text-3xl font-bold text-gray-900 dark:text-[#1E2939] mb-12 text-center">
        {t('header.nav.contact')}
      </h2>
      <div className="flex justify-between items-center">
        <div className="w-[45%] ">
          <img
            src="https://cdn.pixabay.com/photo/2022/12/02/11/24/tax-7630744_1280.png"
            alt="user-form"
            className="w-full h-full object-cover"
          />
        </div>
        <motion.form
          onSubmit={handleSubmit(onSubmit)}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className=" w-[40%] space-y-6  mb-9  "
        >
          {/* Name Field */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 ">
              Full Name
            </label>
            <div className="relative">
              <UserIcon className="h-5 w-5 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-500" />
              <input
                {...register('name', { required: 'Name is required' })}
                type="text"
                placeholder="John Doe"
                className={`${inputClasses(errors.name)} pl-10`}
              />
            </div>
            {errors.name && (
              <p className="mt-2 text-sm text-red-500">{errors.name.message}</p>
            )}
          </div>

          {/* Email Field */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Email Address
            </label>
            <div className="relative">
              <EnvelopeIcon className="h-5 w-5 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-500" />
              <input
                {...register('email', {
                  required: 'Email is required',
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: 'Invalid email address',
                  },
                })}
                type="email"
                placeholder="john@example.com"
                className={`${inputClasses(errors.email)} pl-10`}
              />
            </div>
            {errors.email && (
              <p className="mt-2 text-sm text-red-500">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Phone Field */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Phone Number
            </label>
            <div className="relative">
              <PhoneIcon className="h-5 w-5 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-500" />
              <input
                {...register('phone', {
                  pattern: {
                    value: /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/,
                    message: 'Invalid phone number',
                  },
                })}
                type="tel"
                placeholder="+1 (555) 123-4567"
                className={`${inputClasses(errors.phone)} pl-10`}
              />
            </div>
            {errors.phone && (
              <p className="mt-2 text-sm text-red-500">
                {errors.phone.message}
              </p>
            )}
          </div>

          {/* Message Field */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Message
            </label>
            <textarea
              {...register('message', {
                required: 'Message is required',
                minLength: {
                  value: 20,
                  message: 'Message must be at least 20 characters',
                },
              })}
              rows="4"
              placeholder="Your message..."
              className={`${inputClasses(errors.message)}`}
            />
            {errors.message && (
              <p className="mt-2 text-sm text-red-500">
                {errors.message.message}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-all duration-200"
          >
            Send Message
          </motion.button>
        </motion.form>
      </div>
    </div>
  )
}

export default Contact
