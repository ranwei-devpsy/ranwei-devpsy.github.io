import type { APIRoute } from 'astro';
import publications from '../../data/publications.json';
import { bibtexText } from '../../lib/citations';

export function getStaticPaths() {
  return publications.map(paper => ({ params: { id: paper.id }, props: { paper } }));
}

export const GET: APIRoute = ({ props }) => new Response(bibtexText(props.paper), {
  headers: { 'Content-Type': 'application/x-bibtex; charset=utf-8' },
});
