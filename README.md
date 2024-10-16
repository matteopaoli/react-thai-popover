# ThaiPopover

A React component that displays a transliteration popover for **Thai text** when the user hovers over it. It fetches transliteration data from an external API and displays it in a popover.

## Installation

To install the component, run:

```bash
npm install thai-popover
```

## Usage

Import the `ThaiPopover` component and use it within your React application:

```js
import React from 'react';
import ThaiPopover from 'thai-popover';

function App() {
  return (
    <div>
      <ThaiPopover bg="#e0f7fa">สวัสดี</ThaiPopover>
    </div>
  );
}

export default App;
```

### Props

| Prop       | Type   | Default       | Description                                                           |
|------------|--------|---------------|-----------------------------------------------------------------------|
| `children` | string | **Required**  | The Thai text to be displayed. This text will be transliterated when hovered over. |
| `bg`       | string | `"transparent"` | Background color of the text container. Accepts any valid CSS color value. |

### Example

```js
import React from 'react';
import ThaiPopover from 'thai-popover';

function App() {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Hover over the text below:</h1>
      <ThaiPopover bg="#f9f9f9">
        สวัสดี
      </ThaiPopover>
    </div>
  );
}

export default App;
```

### Description

`ThaiPopover` displays a transliteration of Thai text when hovered over. The component sends a request to an external API to fetch the transliteration of the provided text. While the data is being fetched, a spinner is displayed. If the request fails, an error message is shown instead.

### Styling

- The `bg` prop allows you to customize the background color of the text container.
- The popover has a smooth transition when it appears and disappears, making the experience more interactive.

### API

The component makes a `POST` request to `https://getmatke.pythonanywhere.com/api/g2p` to fetch transliteration data. The response is displayed in the popover under the label "Transliteration".

### Notes

- Make sure to handle any API rate limits or potential downtime, as the component relies on an external service for transliteration.
- The popover adjusts its height dynamically based on the content, ensuring a smooth transition.

### License

MIT
