import React from 'react';
import Markdown from 'react-native-markdown-display';
import TokenizedText from './SplitText';

interface AnimatedMarkdownProps {
    content: string;
    animation?: string;
    animationDuration?: string;
}

const AnimatedMarkdown: React.FC<AnimatedMarkdownProps> = ({
    content,
    animation = "fadeIn",
    animationDuration = "1s",
}) => {
    const renderers = {
        text: (props: any) => {
            return <TokenizedText input={props.children} sep="word" animation={animation} animationDuration={animationDuration} />;
        }
    };

    return (
        <Markdown rules={renderers}>
            {content}
        </Markdown>
    );
};

export default AnimatedMarkdown;
