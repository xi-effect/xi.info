import { source } from '@/lib/source';
import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import { baseOptions } from '@/lib/layout.shared';
import { Footer } from 'pkg.footer';
import { DocsRoleSwitcher } from '@/components/DocsRoleSwitcher';
import { roleFromSlug, treeForRole } from '@/lib/docs-role';

export default async function Layout({ children, params }: LayoutProps<'/[[...slug]]'>) {
  const { slug } = await params;
  const tree = treeForRole(source.getPageTree(), roleFromSlug(slug));

  return (
    <>
      <DocsLayout
        tree={tree}
        {...baseOptions()}
        sidebar={{
          tabs: false,
          banner: <DocsRoleSwitcher />,
        }}
      >
        {children}
      </DocsLayout>
      <Footer
        classNameFooter="bg-gray-5 dark:bg-gray-100 mt-10 rounded-t-[32px] xl:rounded-t-[64px]"
        innerClassNameFooter="bg-transparent"
        themeAwareContent
        showPromoSection={false}
        topContent={<></>}
        logoPathLight="/logoforwhite.svg"
        logoPathDark="/logofordark.svg"
        linkOrigin="https://sovlium.ru"
      />
    </>
  );
}
