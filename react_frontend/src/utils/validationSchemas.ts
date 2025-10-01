import * as Yup from 'yup';

export const userValidationSchema = Yup.object({
  firstName: Yup.string()
    .required('First name is required')
    .min(2, 'First name must be between 2 and 50 characters')
    .max(50, 'First name must be between 2 and 50 characters'),
  lastName: Yup.string()
    .required('Last name is required')
    .min(2, 'Last name must be between 2 and 50 characters')
    .max(50, 'Last name must be between 2 and 50 characters'),
  email: Yup.string()
    .required('Email is required')
    .email('Email should be valid'),
});

export const userRegisterValidationSchema = Yup.object({
  firstName: Yup.string()
    .required('First name is required')
    .min(2, 'First name must be between 2 and 50 characters')
    .max(50, 'First name must be between 2 and 50 characters'),
  lastName: Yup.string()
    .required('Last name is required')
    .min(2, 'Last name must be between 2 and 50 characters')
    .max(50, 'Last name must be between 2 and 50 characters'),
  email: Yup.string()
    .required('Email is required')
    .email('Email should be valid'),
  password: Yup.string()
    .required('Password is required')
    .min(8, 'Password must be at least 8 characters'),
});

const getTomorrowDate = () => {
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  tomorrow.setHours(0, 0, 0, 0);
  return tomorrow;
};

export const eventValidationSchema = Yup.object({
  name: Yup.string()
    .required('Event name is required')
    .min(3, 'Event name must be between 3 and 100 characters')
    .max(100, 'Event name must be between 3 and 100 characters'),
  location: Yup.string()
    .required('Location is required')
    .min(3, 'Location must be between 3 and 200 characters')
    .max(200, 'Location must be between 3 and 200 characters'),
  eventDate: Yup.date()
    .required('Event date is required')
    .min(getTomorrowDate(), 'Event date must be at least tomorrow'),
  description: Yup.string()
    .max(500, 'Description cannot exceed 500 characters'),
});

export const profileValidationSchema = userValidationSchema;