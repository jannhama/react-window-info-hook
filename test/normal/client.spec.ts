import {renderHook} from 'react-hooks-testing-library';
import {useWindowInfo} from '../../src';

describe('use-window-info', () => {
  beforeEach(() => {
  });

  describe('Change screen size to mobile', () => {
    beforeEach(() => {
      // @ts-ignore
      window.innerHeight = 480;
      // @ts-ignore
      window.innerWidth = 320;
    });
    it('Check if correct resolution is returned', () => {
      const {result} = renderHook(() => useWindowInfo());
      expect(result.current.windowSize.height).toEqual(480);
      expect(result.current.windowSize.width).toEqual(320);
    });
    it('Check if mobile responsive mode is returned', () => {
      const {result} = renderHook(() => useWindowInfo());
      expect(result.current.mobile).toBe(true);
      expect(result.current.tablet).toBe(false);
      expect(result.current.desktop).toBe(false);
    });
    it('Check if screen is portrait', () => {
      const {result} = renderHook(() => useWindowInfo());
      expect(result.current.portrait).toBe(true);
    });
  });

  describe('Change screen size to tablet', () => {
    beforeEach(() => {
      // @ts-ignore
      window.innerHeight = 1024;
      // @ts-ignore
      window.innerWidth = 768;
    });
    it('Check if correct resolution is returned', () => {
      const {result} = renderHook(() => useWindowInfo());
      expect(result.current.windowSize.height === 1024);
      expect(result.current.windowSize.width === 768);
    });
    it('Check if tablet responsive mode is returned', () => {
      const {result} = renderHook(() => useWindowInfo());
      expect(result.current.mobile).toBe(false);
      expect(result.current.tablet).toBe(true);
      expect(result.current.desktop).toBe(false);
    });
    it('Check if screen is portrait', () => {
      const {result} = renderHook(() => useWindowInfo());
      expect(result.current.portrait).toBe(true);
    });
  });

  describe('Change screen from portrait to landscape', () => {
    beforeEach(() => {
      // @ts-ignore
      window.innerHeight = 512;
      // @ts-ignore
      window.innerWidth = 1024;
    });
    it('Check if desktop responsive mode is returned', () => {
      const {result} = renderHook(() => useWindowInfo());
      expect(result.current.mobile).toBe(false);
      expect(result.current.tablet).toBe(false);
      expect(result.current.desktop).toBe(true);
    });
    it('Check if screen is portrait', () => {
      const {result} = renderHook(() => useWindowInfo());
      expect(result.current.portrait).toBe(false);
    });
  });
});
