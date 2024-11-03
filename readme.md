# JSX to RN

**JSX to RN** is a lightweight library that brings familiar HTML-like tags (such as `<div>`, `<p>`, `<h1>`) to React Native, allowing developers to write mobile components with the ease and familiarity of HTML syntax. This library is ideal for developers transitioning from web development or those seeking a more intuitive structure in React Native projects.

## Installation

Install the library via npm or yarn:

```bash
npm install jsx-to-rn
```

or

```bash
yarn add jsx-to-rn
```

## Usage

You can import individual components, like so:

```typescript
import { div, p, h1 } from 'jsx-to-rn';
```

Or import everything at once and access components as properties:

```typescript
import * as JSXTags from 'jsx-to-rn';

const App = () => (
  <JSXTags.div style={{ padding: 20 }}>
    <JSXTags.h1 style={{ fontSize: 24 }}>Hello, World!</JSXTags.h1>
    <JSXTags.p style={{ marginVertical: 8 }}>This is a React Native component that looks like HTML!</JSXTags.p>
  </JSXTags.div>
);
```

## Available Components

The library provides the following components, each styled and named to resemble HTML tags:

- **`<div>`** – Container for layout, using `View` under the hood.
- **`<p>`** – Text paragraph, using `Text` with default styling.
- **`<h1>`, `<h2>`, etc.** – Heading components with default font sizes for each level.
- **`<img>`** – Image component based on `Image`.
- **`<button>`** – Button component based on `TouchableOpacity` and styled for intuitive click events.
- **Other HTML-inspired tags** – Such as `<input>`, `<ul>`, `<li>`, and `<a>` for lists, links, and more.

## TypeScript Support

JSX to RN includes TypeScript definitions for all components, providing IntelliSense and type checking for better development experience.

## Contributing

Contributions are welcome! If you find a bug or want to add new features, feel free to open an issue or submit a pull request.

## License

This project is licensed under the MIT License.