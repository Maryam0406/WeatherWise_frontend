import { useState } from 'react';

const [formData, setFormData] = useState({
    name: '',
    location_id: '',
    start_date: '',
    end_date: '',
    notes: '',
  });

  const [error, setError] = useState('');

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  