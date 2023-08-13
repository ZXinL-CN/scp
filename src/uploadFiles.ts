import fs from 'node:fs';
import colors from './colors';
import scanfPwd from './scanfPwd';
import { Client } from 'node-scp';

export default async function uploadFiles(config) {

    const { clientConfig, uploadPath, remotePath } = config;

    if (!fs.existsSync(`${uploadPath}`)) {
        return colors('red', `Cannot find path: "${uploadPath}"`);
    }
    const password = scanfPwd();
    colors.green(`Upload path: "${uploadPath}"`);

    try {
        const client = await Client(Object.assign(clientConfig, { password }));

        colors.green(`------------------Start uploading-------------`);

        const isExists = await client.exists(remotePath);
        if (!isExists) {
            colors.red(`Cannot Remote path: "${remotePath}"`);
            return colors.yellow(`You need to manually create the path in the home directory: "~/${remotePath}"!`);
        }

        colors.magenta(`Remote Path: "${remotePath}"\n loading......`);
        await client.uploadDir(uploadPath, remotePath);
        client.close();
        colors('green', `------------------Upload succeeded------------`);
    } catch (e) {
        colors('red', `------------------Upload failed---------------`);
        colors('reset', e)
    }
}