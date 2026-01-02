import { useQuery } from '@tanstack/react-query';
import { 
  fetchChapterVerses, 
  convertApiVerseToAppVerse, 
  gitaChaptersData,
  GitaSlokResponse 
} from '@/lib/api/gitaApi';

export function useGitaChapters() {
  return {
    chapters: gitaChaptersData.map(ch => ({
      id: `gita-ch-${ch.number}`,
      number: ch.number,
      title: ch.name,
      description: ch.description,
      verseCount: ch.verses,
      topics: ch.topics,
      verses: [],
    })),
    isLoading: false,
    error: null,
  };
}

export function useGitaChapterVerses(chapterNumber: number) {
  const query = useQuery({
    queryKey: ['gita-chapter-verses', chapterNumber],
    queryFn: async () => {
      const apiVerses = await fetchChapterVerses(chapterNumber);
      return apiVerses.map(convertApiVerseToAppVerse);
    },
    staleTime: 1000 * 60 * 60, // Cache for 1 hour
    gcTime: 1000 * 60 * 60 * 24, // Keep in cache for 24 hours
  });

  return {
    verses: query.data || [],
    isLoading: query.isLoading,
    error: query.error,
    refetch: query.refetch,
  };
}

export function useGitaVerse(chapter: number, verse: number) {
  const query = useQuery({
    queryKey: ['gita-verse', chapter, verse],
    queryFn: async () => {
      const response = await fetch(`https://vedicscriptures.github.io/slok/${chapter}/${verse}`);
      if (!response.ok) throw new Error('Failed to fetch verse');
      const apiVerse: GitaSlokResponse = await response.json();
      return convertApiVerseToAppVerse(apiVerse);
    },
    staleTime: 1000 * 60 * 60,
    gcTime: 1000 * 60 * 60 * 24,
  });

  return {
    verse: query.data,
    isLoading: query.isLoading,
    error: query.error,
  };
}
