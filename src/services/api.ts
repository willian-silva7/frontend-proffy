// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react';
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3333',
});

export default api;
