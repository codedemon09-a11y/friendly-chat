import { useGitaChapters, useGitaChapterVerses } from './useGitaData';
import { getAllRamayanChapters, ramayanVerses } from '@/data/ramayan/ramayanData';
import { getAllRigVedaChapters, rigVedaVerses } from '@/data/vedas/rigVedaData';
import { getAllUpanishadChapters, upanishadVerses } from '@/data/upanishads/upanishadsData';
import { getAllShivPuranaChapters, shivPuranaVerses } from '@/data/puranas/shivPuranaData';

export type ScriptureType = 'bhagavad-gita' | 'ramayan' | 'rig-veda' | 'upanishads' | 'shiv-purana';

export function useScriptureChapters(scriptureSlug: string) {
  const { chapters: gitaChapters } = useGitaChapters();

  switch (scriptureSlug) {
    case 'bhagavad-gita':
      return { chapters: gitaChapters, isLoading: false, error: null };
    case 'ramayan':
      return { chapters: getAllRamayanChapters(), isLoading: false, error: null };
    case 'rig-veda':
      return { chapters: getAllRigVedaChapters(), isLoading: false, error: null };
    case 'upanishads':
      return { chapters: getAllUpanishadChapters(), isLoading: false, error: null };
    case 'shiv-purana':
      return { chapters: getAllShivPuranaChapters(), isLoading: false, error: null };
    default:
      return { chapters: [], isLoading: false, error: null };
  }
}

export function useScriptureVerses(scriptureSlug: string, chapterNumber: number) {
  // For Gita, use the API hook
  const gitaData = useGitaChapterVerses(scriptureSlug === 'bhagavad-gita' ? chapterNumber : 0);

  if (scriptureSlug === 'bhagavad-gita') {
    return gitaData;
  }

  // For other scriptures, use static data
  let verses: any[] = [];
  
  switch (scriptureSlug) {
    case 'ramayan':
      verses = ramayanVerses[chapterNumber] || [];
      break;
    case 'rig-veda':
      verses = rigVedaVerses[chapterNumber] || [];
      break;
    case 'upanishads':
      verses = upanishadVerses[chapterNumber] || [];
      break;
    case 'shiv-purana':
      verses = shivPuranaVerses[chapterNumber] || [];
      break;
  }

  return {
    verses,
    isLoading: false,
    error: null,
    refetch: () => {},
  };
}
