import { TextProps, ViewProps, ImageProps, ScrollViewProps, TextInputProps, TouchableOpacityProps } from 'react-native';
import React from 'react';

export type DivProps = ViewProps & { children?: React.ReactNode };
export type SpanProps = TextProps & { children?: React.ReactNode };
export type ParagraphProps = TextProps & { children?: React.ReactNode };
export type HeadingProps = TextProps & { children?: React.ReactNode };
export type ImageComponentProps = ImageProps;
export type ButtonProps = TouchableOpacityProps & { children?: React.ReactNode };
export type InputProps = TextInputProps;
export type ScrollProps = ScrollViewProps & { children?: React.ReactNode };
export type AnchorProps = TouchableOpacityProps & { children?: React.ReactNode };
export type ListProps = ViewProps & { children?: React.ReactNode };
export type ListItemProps = TextProps & { children?: React.ReactNode };
