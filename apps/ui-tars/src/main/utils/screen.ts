/*
 * Copyright (c) 2025 Bytedance, Inc. and its affiliates.
 * SPDX-License-Identifier: Apache-2.0
 */
import { screen } from 'electron';

import * as env from '@main/env';

export const getScreenSize = () => {
  const primaryDisplay = screen.getPrimaryDisplay();

  // Log both size and bounds for debugging
  console.log('[DEBUG] primaryDisplay.size (workArea):', primaryDisplay.size);
  console.log(
    '[DEBUG] primaryDisplay.bounds (fullScreen):',
    primaryDisplay.bounds,
  );
  console.log('[DEBUG] primaryDisplay.workArea:', primaryDisplay.workArea);
  console.log(
    '[DEBUG] primaryDisplay.workAreaSize:',
    primaryDisplay.workAreaSize,
  );

  // Use bounds instead of size to include taskbar area
  const logicalSize = {
    width: primaryDisplay.bounds.width,
    height: primaryDisplay.bounds.height,
  };
  // Mac retina display scaleFactor = 1
  const scaleFactor = env.isMacOS ? 1 : primaryDisplay.scaleFactor;

  const physicalSize = {
    width: Math.round(logicalSize.width * scaleFactor),
    height: Math.round(logicalSize.height * scaleFactor),
  };

  console.log('[DEBUG] Final logicalSize:', logicalSize);
  console.log('[DEBUG] Final physicalSize:', physicalSize);
  console.log('[DEBUG] scaleFactor:', scaleFactor);

  return {
    id: primaryDisplay.id,
    physicalSize,
    logicalSize,
    scaleFactor,
  };
};
