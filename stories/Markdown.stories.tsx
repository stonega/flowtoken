import React from 'react';
import { View, Text } from 'react-native';
import AnimatedMarkdown from '../src/components/AnimatedMarkdown';
import { text } from './TestMarkdown';

export default {
    title: 'Components/Markdown',
    component: AnimatedMarkdown,
};

export const DefaultMarkdown = () => <AnimatedMarkdown content={text} />;
