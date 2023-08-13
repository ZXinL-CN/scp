import fs from 'node:fs';
import path from 'node:path';

const defaultConfig = {
    "clientConfig": {
        "host": "www.google.com",
        "port": 22,
        "username": "root",
    },
    "uploadPath": "./dist",
    "remotePath": "project/workspace"
};

;((function initConfig() {
    const configPath = path.join(process.cwd(), 'scp.config.json');
    console.log(configPath)
    fs.access(configPath, fs.constants.F_OK, (err) => {
        if (err) {
            fs.writeFile(configPath, JSON.stringify(defaultConfig, null, 2), (err) => {
                if (err) throw err;
            });
        }
    });
})());


