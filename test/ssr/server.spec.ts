/**
 * @jest-environment node
 */

import {renderHook} from 'react-hooks-testing-library';
import {useWindowInfo} from '../../src';

describe('use-window-info', () => {
  describe('Test server side rendering support', () => {

    it('Check if windows size is zero', () => {
      const {result} = renderHook(() => useWindowInfo());
      expect(result.current.windowSize.width).toBe(0);
      expect(result.current.windowSize.height).toBe(0);
    });
  });
});
