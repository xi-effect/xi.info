import { source } from '@/lib/source';
import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import { baseOptions } from '@/lib/layout.shared';
import { Footer } from 'pkg.footer';

export default function Layout({ children }: LayoutProps<'/[[...slug]]'>) {
  return (
    <>
      <DocsLayout tree={source.getPageTree()} {...baseOptions()}>
        {children}
      </DocsLayout>
      <Footer
        classNameFooter="bg-gray-5 dark:bg-gray-100 mt-10 rounded-t-[32px] xl:rounded-t-[64px]"
        innerClassNameFooter="bg-transparent"
        themeAwareContent
        topContent={<></>}
        logoPathLight="/logoforwhite.svg"
        logoPathDark="/logofordark.svg"
      />
    </>
  );
}
