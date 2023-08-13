#!/usr/bin/env node

import colors from './colors';
import readConfig from './readConfig';
import uploadFiles from './uploadFiles';

;((() => {
    const config = readConfig();
    colors(config);
    uploadFiles(config);
})());