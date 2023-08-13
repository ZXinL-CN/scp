import fs from 'node:fs';
import path from 'node:path';
import colors from './colors';

export default function readConfig() {
    const configPath = path.join(process.cwd(), 'scp.config.json');
    try {
        const configString = fs.readFileSync(configPath, 'utf8');
        const configContent = JSON.parse(configString);

        // Never expose your password.
        if (configString.includes('password')) {
            colors('red', 'Warning: Password fields should not be explicitly configured as they may leak!');
            throw configContent;
        }
        return configContent;
    } catch (e) {
        console.error('Error reading the scp config file:', e);
        process.exit(1);
    }
}