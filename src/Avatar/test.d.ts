import { default as Avatar } from './';
import { StoryObj } from '@storybook/react';

declare const meta: {
    title: string;
    component: {
        ({ id, className, size, text, src, onHover, onClick, sx, tooltip, }: import('./Avatar.types').AvatarProps): import("react/jsx-runtime").JSX.Element;
        defaultProps: Partial<import('./Avatar.types').AvatarProps>;
    };
    parameters: {
        layout: string;
    };
    tags: string[];
    argTypes: {};
};
export default meta;
type Story = StoryObj<typeof Avatar>;
export declare const Default: Story;
