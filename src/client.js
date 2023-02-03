import sanityClient from '@sanity/client';
import imageURLBuilder from '@sanity/image-url'

export const client = sanityClient({
    projectId: 'plb57ekv',
    dataset: 'production',
    apiVersion: '2022-02-01',
    useCdn: true,
    token: 'skgcQEhyLaub79LvKxUxiTWFLNv49Hp3tyipHB1lU6X1EtdQSZM7v4HlhSOuA3NVC5SFGiwLjT3OTiIw8t9JgDIBdbGeN1UKWMGnTbjzsTx5PQueGduVEMaJiBjHLzl4UxCJqCkZyvhPTcgzFqR8KP3N5Uh5pXJRqGlvGpIeC4dCJEyskt8B'
});

const builder = imageURLBuilder(client)

export const urlFor = (source) => builder.image(source);