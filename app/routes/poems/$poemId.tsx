import type { LoaderFunction, MetaFunction } from 'remix';
import { useLoaderData } from 'remix';

import type { Poem } from '~/content';
import { poems } from '~/content';

export const meta: MetaFunction = ({ data }: { data: Poem | undefined }) => {
  if (!data) {
    return {
      title: 'கவிதை இல்லை',
      description: 'கவிதை இன்னும் அந்தத் தலைப்பில் எழுதப்படவில்லை',
    };
  }

  return {
    title: data.title,
    description: data.poem.slice(0, 100),
  };
};

export const loader: LoaderFunction = ({ params }) => {
  return poems.find((poem) => poem.slug === params.poemId);
};

export default function Poem() {
  const data = useLoaderData<Poem | undefined>();

  if (!data) {
    return (
      <pre>
        <code>இன்னும் எழுதப்படவில்லை!</code>
      </pre>
    );
  }

  return (
    <>
      <h1 style={{ color: 'coral' }}>{data.title}</h1>
      <pre style={{ fontSize: '1rem' }}>
        <code>{data.poem}</code>
      </pre>
      <h4 style={{ color: 'blueviolet' }}>{data.date} அன்று எழுதப்பட்டது</h4>
    </>
  );
}
