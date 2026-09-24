import { RootDocument, siteMetadata } from '../root-document';

export const metadata = siteMetadata('zh');

export default function ZhLayout({ children }: { children: React.ReactNode }) {
  return <RootDocument lang="zh">{children}</RootDocument>;
}
