import { RootDocument, siteMetadata } from '../../root-document';

export const metadata = siteMetadata('en');

export default function EnLayout({ children }: { children: React.ReactNode }) {
  return <RootDocument lang="en">{children}</RootDocument>;
}
