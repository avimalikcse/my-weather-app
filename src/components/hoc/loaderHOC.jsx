import { CircularProgress } from '@mui/material';
import React from 'react';

// Loader HOC, Wrap this component where we need display a loading indicator
// Should be used this HOC so that we have similar UX throughOut App
export default function WithLoading(Component) {
  return function WithLoadingComponent({ isLoading,loadingMessage, ...props }) {

    const message = loadingMessage || 'Loading'
    if (!isLoading) return (<Component {...props} />); // return the Component when we done with loading 
  return (<CircularProgress data-testid="loader">{message}</CircularProgress>);
  }
}