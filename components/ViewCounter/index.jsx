import { useEffect, useState } from 'react'
import { supabase } from '../../lib/supabase'

export default function ViewCounter({ slug }) {
  const [views, setViews] = useState(null)

  useEffect(() => {
    const incrementViews = async () => {
      const isLocalhost = window.location.hostname === 'localhost' || 
                         window.location.hostname === '127.0.0.1'

      try {
        // Only increment if not on localhost
        if (!isLocalhost) {
          const { error } = await supabase.rpc('increment_page_views', {
            page_slug: slug,
          })

          if (error) {
            console.error('Error incrementing views:', error)
            return
          }
        }

        // Fetch the view count (works on localhost and production)
        const { data: viewData, error: fetchError } = await supabase
          .from('post_views')
          .select('views')
          .eq('slug', slug)
          .maybeSingle()

        if (fetchError) {
          console.error('Error fetching views:', fetchError)
          return
        }

        setViews(viewData?.views || 0)
      } catch (err) {
        console.error('Unexpected error:', err)
      }
    }

    incrementViews()
  }, [slug])

  // Hide counter on error
  if (views === null) {
    return (
      <span className="text-gray-500">
        <span className="inline-block w-12 h-4 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
        {' views'}
      </span>
    )
  }

  return (
    <span className="text-gray-500">
      {views.toLocaleString()} views
    </span>
  )
}
