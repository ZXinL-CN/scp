import promptSync from 'prompt-sync';

const prompt = promptSync();

export default function scanfPwd() {
    const password = prompt('enter password: ', { echo: '*' });
    return password;
}