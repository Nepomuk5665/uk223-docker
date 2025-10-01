import React from 'react';
import { useFormik } from 'formik';
import { Box, Button, TextField } from '@mui/material';
import { EventCreateDTO, EventDTO } from '../../../types/models/Event.model';
import { eventValidationSchema } from '../../../utils/validationSchemas';

type EventFormProps = {
    eventToEdit?: EventDTO;
    onSubmit: (data: EventCreateDTO) => void;
};

const EventForm: React.FC<EventFormProps> = ({ eventToEdit, onSubmit }) => {
    const formik = useFormik({
        initialValues: {
            name: eventToEdit?.name || '',
            location: eventToEdit?.location || '',
            eventDate: eventToEdit?.eventDate ? eventToEdit.eventDate.slice(0, 16) : '',
            description: eventToEdit?.description || '',
        },
        validationSchema: eventValidationSchema,
        onSubmit: (values) => {
            const eventDateISO = new Date(values.eventDate).toISOString();
            const data: EventCreateDTO = {
                name: values.name,
                location: values.location,
                eventDate: eventDateISO,
                description: values.description,
            };
            onSubmit(data);
        },
        enableReinitialize: true,
    });

    return (
        <form onSubmit={formik.handleSubmit}>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, maxWidth: 500 }}>
                <TextField
                    id="name"
                    name="name"
                    label="Name"
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.name && Boolean(formik.errors.name)}
                    helperText={formik.touched.name && formik.errors.name}
                    fullWidth
                />

                <TextField
                    id="location"
                    name="location"
                    label="Ort"
                    value={formik.values.location}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.location && Boolean(formik.errors.location)}
                    helperText={formik.touched.location && formik.errors.location}
                    fullWidth
                />

                <TextField
                    id="eventDate"
                    name="eventDate"
                    label="Datum & Uhrzeit"
                    type="datetime-local"
                    value={formik.values.eventDate}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.eventDate && Boolean(formik.errors.eventDate)}
                    helperText={formik.touched.eventDate && formik.errors.eventDate}
                    InputLabelProps={{
                        shrink: true,
                    }}
                    fullWidth
                />

                <TextField
                    id="description"
                    name="description"
                    label="Beschreibung"
                    multiline
                    rows={4}
                    value={formik.values.description}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.description && Boolean(formik.errors.description)}
                    helperText={formik.touched.description && formik.errors.description}
                    fullWidth
                />

                <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    disabled={!formik.isValid || !formik.dirty}
                >
                    Speichern
                </Button>
            </Box>
        </form>
    );
};

export default EventForm;