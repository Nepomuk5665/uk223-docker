import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import { Box, Button, TextField, Typography, Alert } from '@mui/material';
import ActiveUserContext from '../../../Contexts/ActiveUserContext';
import UserService from '../../../Services/UserService';
import { User } from '../../../types/models/User.model';
import { profileValidationSchema } from '../../../utils/validationSchemas';

const ProfilePage: React.FC = () => {
  const navigate = useNavigate();
  const { user, setActiveUser } = useContext(ActiveUserContext);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: ''
    },
    validationSchema: profileValidationSchema,
    onSubmit: async (values) => {
      if (!user) return;

      try {
        const updateData: User = {
          ...user,
          firstName: values.firstName,
          lastName: values.lastName,
          email: values.email
        };

        await UserService.updateUser(updateData);
        setActiveUser(updateData);
        localStorage.setItem('user', JSON.stringify(updateData));
        setSuccess(true);
        setError(null);
      } catch (err) {
        setError('Failed to update profile');
        setSuccess(false);
      }
    },
    enableReinitialize: true,
  });

  useEffect(() => {
    if (!user) {
      navigate('/login');
      return;
    }

    UserService.getUser(user.id)
      .then((userData) => {
        formik.setValues({
          firstName: userData.firstName,
          lastName: userData.lastName,
          email: userData.email
        });
        setLoading(false);
      })
      .catch(() => {
        setError('Failed to load profile');
        setLoading(false);
      });
  }, [user, navigate]);

  if (loading) return <div>Loading...</div>;

  return (
    <Box sx={{ padding: 3, maxWidth: 400, margin: '0 auto' }}>
      <Typography variant="h4" gutterBottom>
        Edit Profile
      </Typography>

      {error && <Alert severity="error" sx={{ mb: 2 }}>{error}</Alert>}
      {success && <Alert severity="success" sx={{ mb: 2 }}>Profile updated!</Alert>}

      <form onSubmit={formik.handleSubmit}>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          <TextField
            id="firstName"
            name="firstName"
            label="First Name"
            value={formik.values.firstName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.firstName && Boolean(formik.errors.firstName)}
            helperText={formik.touched.firstName && formik.errors.firstName}
            fullWidth
          />

          <TextField
            id="lastName"
            name="lastName"
            label="Last Name"
            value={formik.values.lastName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.lastName && Boolean(formik.errors.lastName)}
            helperText={formik.touched.lastName && formik.errors.lastName}
            fullWidth
          />

          <TextField
            id="email"
            name="email"
            label="Email"
            type="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
            fullWidth
          />

          <Box sx={{ display: 'flex', gap: 1 }}>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              disabled={!formik.isValid || !formik.dirty}
            >
              Save
            </Button>
            <Button
              type="button"
              variant="contained"
              color="secondary"
              onClick={() => navigate(-1)}
            >
              Cancel
            </Button>
          </Box>
        </Box>
      </form>
    </Box>
  );
};

export default ProfilePage;