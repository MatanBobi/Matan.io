import { useEffect } from 'react'
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { supabase } from '../../lib/supabase'

// Fetch view count
const fetchViews = async (slug) => {
  const { data: viewData, error } = await supabase
    .from('post_views')
    .select('views')
    .eq('slug', slug)
    .maybeSingle()

  if (error) {
    throw error
  }

  return viewData?.views || 0
}

// Increment view count
const incrementViews = async (slug) => {
  const { error } = await supabase.rpc('increment_page_views', {
    page_slug: slug,
  })

  if (error) {
    throw error
  }
}

export default function ViewCounter({ slug, showIcon = true, incrementOnMount = true }) {
  const queryClient = useQueryClient()

  // Query to fetch views
  const { data: views, isLoading, isError } = useQuery({
    queryKey: ['post-views', slug],
    queryFn: () => fetchViews(slug),
    staleTime: 60 * 1000, // 1 minute
    refetchOnWindowFocus: false,
    placeholderData: 0, // Show 0 initially instead of loading state
  })

  // Mutation to increment views
  const incrementMutation = useMutation({
    mutationFn: () => incrementViews(slug),
    onSuccess: () => {
      // Refetch views after successful increment
      queryClient.invalidateQueries({ queryKey: ['post-views', slug] })
    },
    onError: (error) => {
      console.error('Error incrementing views:', error)
    },
  })

  // Increment views on mount (only if not localhost and incrementOnMount is true)
  useEffect(() => {
    if (!incrementOnMount) return
    
    const isLocalhost = window.location.hostname === 'localhost' || 
                       window.location.hostname === '127.0.0.1'

    if (!isLocalhost) {
      incrementMutation.mutate()
    }
  }, [slug, incrementOnMount])

  // Format the view count
  const displayViews = isError ? '--' : (views?.toLocaleString() || '0')

  return (
    <span className="text-gray-500 inline-flex items-center gap-1">
      {showIcon && (
        <svg 
          className="w-4 h-4" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" 
          />
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" 
          />
        </svg>
      )}
      <span className={isLoading ? 'opacity-50' : ''}>
        {displayViews} views
      </span>
    </span>
  )
}
