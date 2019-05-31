# react-window-info-hook
Window resize hook for React and TypeScript

This is a simple helper hook to get current browser window size on run time.
Typical use case would responsive web design with react. In the past CSS **display: none** used to hide
elements from the DOM as well but it doesn't behave like that anymore. Correct way to hide elements is just to
not render them at all.

## Install

```
npm install react-window-info-hook
```

## Usage

Usage is pretty straight forward. Just import the hook and call the hook function in your component.
In the example _mobile_ div is shown if hook says window size is below mobile limit. Otherwise we render
_tablet_ div.

```ts
import {useWindowInfo} from 'react-window-info-hook'

export function MyReactComponent(): JSX.Element {
  const info = useWindowInfo();
  return (
    <>
      {info.mobile ? <div>Mobile</div> : <div>Tablet</div>}
     </>
  );
}

```

## Return values

Hook function will return you following structure

```ts
interface IWindowInfo {
  windowSize: { width: number, height: number };
  mobile: boolean;
  tablet: boolean;
  desktop: boolean;
  portrait: boolean;
}
```

Only one of the predefined modes can be true at time. Portrait will be true if window height is more than
window width.

## Responsive design & breakpoints

Currently display sizes are divided into following:

* Mobile - when window width is below 768 pixels
* Tablet - when window width is equal or above 768 pixels but less than 992 pixels
* Desktop - when window width is equal or above 992 pixels

Naturally more fine tuned breakpoints could be added but in the other hand that can be defined in the application
as hook returns also current size of window.

Breakpoint info was gathered from [Media Genesis site](https://mediag.com/blog/popular-screen-resolutions-designing-for-all/)

## License 
Released under [MIT](https://opensource.org/licenses/MIT) license.

&copy; 2019 Janne Hämäläinen.
