import type { Folder, Root } from 'fumadocs-core/page-tree';
import { roleAliases, studentSlugs, tutorSlugs } from '@/lib/doc-slugs';

export type DocsRole = 'tutor' | 'student';

export const DOCS_ROLE_STORAGE_KEY = 'sovlium-docs-role';

const knownSlugs: Record<DocsRole, Set<string>> = {
  tutor: new Set(tutorSlugs),
  student: new Set(studentSlugs),
};

export function roleFromPath(pathname: string): DocsRole {
  return pathname === '/student' || pathname.startsWith('/student/') ? 'student' : 'tutor';
}

export function pathForRole(pathname: string, next: DocsRole): string {
  const parts = pathname.split('/').filter(Boolean);
  const rest = parts[0] === 'tutor' || parts[0] === 'student' ? parts.slice(1).join('/') : '';
  const aliased = roleAliases[rest]?.[next];
  const candidate = aliased ?? rest;
  if (candidate && knownSlugs[next].has(candidate)) return `/${next}/${candidate}`;
  return `/${next}`;
}

export function roleFromSlug(slug?: string[]): DocsRole {
  return slug?.[0] === 'student' ? 'student' : 'tutor';
}

function isRoleFolder(node: Folder, role: DocsRole): boolean {
  if (node.index?.url === `/${role}`) return true;
  return node.children.some((child) => {
    if (child.type === 'page') return child.url === `/${role}` || child.url.startsWith(`/${role}/`);
    if (child.type === 'folder') return isRoleFolder(child, role);
    return false;
  });
}

export function treeForRole(tree: Root, role: DocsRole): Root {
  const folder = tree.children.find(
    (node): node is Folder => node.type === 'folder' && isRoleFolder(node, role),
  );
  if (!folder) return tree;

  return {
    ...tree,
    name: folder.name,
    children: folder.children,
  };
}
