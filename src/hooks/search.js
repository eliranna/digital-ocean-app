import React, { useState, useEffect } from 'react';

export function useSearch(props) {
  const [searchParams, setSearchParams] = useState(null);
  return [searchParams, setSearchParams]
}