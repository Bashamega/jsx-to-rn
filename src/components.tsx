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

export const div = ({ children, style, ...props }: DivProps) => (
  <View {...props} style={[{ flex: 1 }, style]}>
    {children}
  </View>
);
export const span = ({ children, style, ...props }: SpanProps) => (
  <Text {...props} style={[style]}>
    {children}
  </Text>
);

export const p = ({ children, style, ...props }: ParagraphProps) => (
  <Text {...props} style={[{ marginVertical: 4 }, style]}>
    {children}
  </Text>
);

export const h1 = ({ children, style, ...props }: HeadingProps) => (
  <Text {...props} style={[{ fontSize: 32, fontWeight: 'bold' }, style]}>
    {children}
  </Text>
);

export const h2 = ({ children, style, ...props }: HeadingProps) => (
  <Text {...props} style={[{ fontSize: 28, fontWeight: 'bold' }, style]}>
    {children}
  </Text>
);

export const img = (props: ImageComponentProps) => <Image {...props} />;

export const button = ({ children, onPress, style, ...props }: ButtonProps) => (
  <TouchableOpacity {...props} onPress={onPress}>
    <Text style={[{ textAlign: 'center', padding: 10 }, style]}>
      {children}
    </Text>
  </TouchableOpacity>
);

export const input = (props: InputProps) => <TextInput {...props} />;

export const ul = ({ children, style, ...props }: ListProps) => (
  <View {...props} style={[style]}>
    {children}
  </View>
);

export const li = ({ children, style, ...props }: ListItemProps) => (
  <Text {...props} style={[{ marginLeft: 16 }, style]}>
    {children}
  </Text>
);

export const a = ({ children, onPress, style, ...props }: AnchorProps) => (
  <TouchableOpacity {...props} onPress={onPress}>
    <Text style={[{ color: 'blue', textDecorationLine: 'underline' }, style]}>
      {children}
    </Text>
  </TouchableOpacity>
);

export const scroll = ({ children, style, ...props }: ScrollProps) => (
  <ScrollView {...props} style={[style]}>
    {children}
  </ScrollView>
);
// Semantic Components (Aliases)
export const header = div;
export const nav = div;
export const main = div;
export const article = div;
export const section = div;
export const aside = div;
export const footer = div;
export const summary = div;
export const details = div;
export const figure = div;
export const figcaption = div;