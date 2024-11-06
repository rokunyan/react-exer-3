import { Button, CardActions, CardContent, Grid2, TextField } from '@mui/material';
import Joi from 'joi';
import React, { useState } from 'react'
import { Card} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const ProductForm = ({onSubmit, currentValue}) => {

const navigate = useNavigate();
const [form, setForm] = useState(
  currentValue ?? {
    title: "",
    price: "",
    description: "",
    image: ""
  }
);

const [errors, setErrors] = useState({});

const schema = Joi.object({
  title: Joi.string().max(100).required(),
  price: Joi.number().required(),
  description: Joi.string().max(500).required(),
  image: Joi.string().required(),
});

const handleSubmit = (event) => {
  event.preventDefault();
  onSubmit(form);
  navigate("/");
};

const handleChange = ({ currentTarget: input }) => {
  setForm({
    ...form,
    [input.name]: input.value,
  });

  const result = schema
    .extract(input.name)
    .label(input.name)
    .validate(input.value);

  if (result.error) {
    setErrors({
      ...errors,
      [input.name]: result.error.details[0].message,
    });
  } else {
    delete errors[input.name];
    setErrors(errors);
  }
};

const isFormInvalid = () => {
  const result = schema.validate(form);
console.log(result)
  return !!result.error;
};

return (
  <Grid2
    container
    justifyContent={"center"}
    component={"form"}
    onSubmit={handleSubmit}>
    <Grid2 size={6}>
      <Card>
        <CardContent>
          <Grid2 container spacing={2}>
            <Grid2 size={12}>
              <TextField
                name="title"
                error={!!errors.title}
                helperText={errors.title}
                label="Product Name"
                variant="standard"
                onChange={handleChange}
                value={form.title}
                fullWidth
              />
            </Grid2>
            <Grid2 size={12}>
              <TextField
                name="price"
                type="number"
                error={!!errors.price}
                helperText={errors.price}
                label="Unit Price"
                variant="standard"
                onChange={handleChange}
                value={form.price}
                fullWidth
              />
            </Grid2>
            <Grid2 size={12}>
              <TextField
                name="description"
                error={!!errors.description}
                helperText={errors.description}
                label="Description"
                variant="standard"
                onChange={handleChange}
                value={form.description}
                fullWidth
              />
            </Grid2>
            <Grid2 size={12}>
              <TextField
                name="image"
                error={!!errors.image}
                helperText={errors.image}
                label="Image URL"
                variant="standard"
                onChange={handleChange}
                value={form.image}
                fullWidth
              />
            </Grid2>
          </Grid2>
        </CardContent>
        <CardActions>
          <Button fullWidth type="submit" disabled={isFormInvalid()}>
            Submit
          </Button>
        </CardActions>
      </Card>
    </Grid2>
  </Grid2>
);
};
export default ProductForm