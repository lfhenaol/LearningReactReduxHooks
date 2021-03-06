import React from 'react';
import { FilterLink } from './FilterLink';

export const Footer = () => {
    return (
        <>
            <FilterLink filter="all">All</FilterLink>{' '}
            <FilterLink filter="active">Active</FilterLink>{' '}
            <FilterLink filter="completed">Completed</FilterLink>
        </>
    );
};
