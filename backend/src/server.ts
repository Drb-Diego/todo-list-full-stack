import expressConfig from './config/configServer';

const app = expressConfig();
const { PORT } = process.env;

app.listen(PORT, () => console.log('Server Up'));