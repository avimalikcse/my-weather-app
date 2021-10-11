import fetchMock from 'fetch-mock'
const nodeFetch = jest.requireActual('node-fetch');
const fetchMockSandbox = fetchMock.sandbox();
Object.assign(fetchMockSandbox.config, nodeFetch, {
    fetch: nodeFetch
});

export default fetchMockSandbox