import React from 'react';
import { Text, View, Image, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import {
  DivProps,
  SpanProps,
  ParagraphProps,
  HeadingProps,
  ImageComponentProps,
  ButtonProps,
  InputProps,
  ScrollProps,
  AnchorProps,
  ListProps,
  ListItemProps,
} from './types/Components.types';

export const div = (props: DivProps) => <View {...props}>{props.children}</View>;
export const span = (props: SpanProps) => <Text {...props}>{props.children}</Text>;
export const p = (props: ParagraphProps) => (
  <Text {...props} style={[{ marginVertical: 4 }, props.style]}>
    {props.children}
  </Text>
);
export const h1 = (props: HeadingProps) => (
  <Text {...props} style={[{ fontSize: 32, fontWeight: 'bold' }, props.style]}>
    {props.children}
  </Text>
);
export const h2 = (props: HeadingProps) => (
  <Text {...props} style={[{ fontSize: 28, fontWeight: 'bold' }, props.style]}>
    {props.children}
  </Text>
);

export const img = (props: ImageComponentProps) => <Image {...props} />;
export const button = (props: ButtonProps) => (
  <TouchableOpacity {...props}>
    <Text style={[{ textAlign: 'center', padding: 10 }, props.style as any]}>{props.children}</Text>
  </TouchableOpacity>
);
export const input = (props: InputProps) => <TextInput {...props} />;

export const ul = (props: ListProps) => <View {...props}>{props.children}</View>;
export const li = (props: ListItemProps) => (
  <Text {...props} style={[{ marginLeft: 16 }, props.style]}>
    {props.children}
  </Text>
);

export const a = (props: AnchorProps) => (
  <TouchableOpacity {...props}>
    <Text style={[{ color: 'blue', textDecorationLine: 'underline' }, props.style]}>{props.children}</Text>
  </TouchableOpacity>
);

export const scroll = (props: ScrollProps) => <ScrollView {...props}>{props.children}</ScrollView>;