import React, { useState } from 'react';
import './AddCarForm.css';

const AddCarForm = () => {
  const [formData, setFormData] = useState({
    id: '',
    name: '',
    ctype: '',
    price: '',
    seats: '',
    transmission: '',
    imageAlt: ''
  });

  const [imageFile, setImageFile] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setImageFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = new FormData();

    // Append fields
    for (const key in formData) {
      payload.append(key, formData[key]);
    }
    if (imageFile) {
      payload.append('image', imageFile);
    }

    try {
      const res = await fetch('/add-car', {
        method: 'POST',
        body: payload,
      });
      const result = await res.json();
      alert(result.message || 'Car added successfully!');
    } catch (err) {
      console.error(err);
      alert('Error adding car');
    }
  };

  return (
    <div className="form-container">
      <h2>Add New Car</h2>
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        {/* Your existing fields */}
        {Object.keys(formData).map((key) => (
          <div key={key} className="form-group">
            <label htmlFor={key}>{key.charAt(0).toUpperCase() + key.slice(1)}:</label>
            <input
              type={key === 'id' || key === 'seats' ? 'number' : 'text'}
              id={key}
              name={key}
              value={formData[key]}
              onChange={handleChange}
              required={['id', 'name', 'ctype', 'price', 'seats', 'transmission'].includes(key)}
            />
          </div>
        ))}

        {/* Image upload field */}
        <div className="form-group">
          <label htmlFor="image">Upload Image:</label>
          <input type="file" id="image" name="image" accept="image/*" onChange={handleFileChange} />
        </div>

        <button type="submit">Add Car</button>
      </form>
    </div>
  );
};

export default AddCarForm;
