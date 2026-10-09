interface Bibliography {
  volume?: string;
  issue?: string;
  pages?: string;
  articleNumber?: string;
  status?: string;
  editors?: string;
  editorsBibtex?: string;
  publisher?: string;
}
interface Paper {
  id: string;
  authors: string;
  title: string;
  year: number;
  journal: string;
  type: string;
  doi: string | null;
  bibliography: Bibliography;
}

const endSentence = (text: string) => /[.!?]$/.test(text) ? text : `${text}.`;
const cleanAuthors = (paper: Paper) => paper.authors.replace(/[+*]/g, '');

export function citationText(paper: Paper) {
  const b = paper.bibliography;
  let source: string;
  if (paper.type === 'chapter') {
    source = `In ${b.editors} (Eds.), ${paper.journal} (pp. ${b.pages}). ${b.publisher}.`;
  } else {
    const volume = b.volume ? `${b.volume}${b.issue ? `(${b.issue})` : ''}` : '';
    const pages = b.articleNumber ? `Article ${b.articleNumber}` : b.pages;
    source = endSentence([paper.journal, volume, pages].filter(Boolean).join(', '));
    if (b.status) source += ` ${endSentence(b.status)}`;
  }
  return `${endSentence(cleanAuthors(paper))} (${paper.year}). ${endSentence(paper.title)} ${source}${paper.doi ? ` ${paper.doi}` : ''}`;
}

export function bibtexText(paper: Paper) {
  const b = paper.bibliography;
  const authors = cleanAuthors(paper).split(/(?<=\.),\s*(?:&\s*)?(?=[^,]+,)/).join(' and ');
  const fields: Record<string, string | undefined> = {
    author: authors,
    title: `{${paper.title}}`,
    year: String(paper.year),
    ...(paper.type === 'chapter'
      ? { booktitle: paper.journal, editor: b.editorsBibtex, publisher: b.publisher }
      : { journal: paper.journal, volume: b.volume, number: b.issue, note: b.status }),
    pages: (b.pages || b.articleNumber)?.replace(/–/g, '--'),
    doi: paper.doi?.replace('https://doi.org/', ''),
    url: paper.doi || undefined,
  };
  const body = Object.entries(fields).filter(([, value]) => value).map(([key, value]) => `  ${key} = {${value}}`).join(',\n');
  return `@${paper.type === 'chapter' ? 'incollection' : 'article'}{ranwei-${paper.year}-${paper.id},\n${body}\n}\n`;
}
